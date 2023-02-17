import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, forkJoin } from 'rxjs';
import {
  catchError,
  combineAll,
  combineLatest,
  map,
  mergeAll,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import {
  increment,
  decrement,
  reset,
  loadCounter,
} from '../../../store/counter/counter.actions';
import { DictionaryService } from 'src/app/api/dictionary/dictionary.service';
import { jsPDF } from 'jspdf';
import  html2canvas from 'html2canvas';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
})
export class StyleguideComponent {
  title = 'test-app';
  cards: any[] = [];
  count$: Observable<number>;
  widget1: any = {
    name: 'sreejith',
  };

  widget2: any = {
    name: 'ranjith',
  };

  constructor(
    private dict: DictionaryService,
    private store: Store<{ count: number }>
  ) {
    this.store.dispatch(loadCounter());
    this.count$ = store.select('count');
    this.widget1.data = this.getData(this.widget1);
    this.displayCards();
  }
  getData(widget: any) {
    return widget.name;
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  downloadCards() {
    this.dict
      .getKindleWords()
      .pipe(
        map((books: any) => {
          console.log('books ', books);
          let vocabs: any[] = [];
          books.forEach((book: any) => {
            if (book.vocabs) {
              book.vocabs.forEach((vocab: any) => {
                if (!vocabs.some((iv: any) => iv.baseForm == vocab.baseForm)) {
                  vocabs.push(vocab);
                }
              });
            }
          });
          return vocabs;
        })
      )
      .subscribe((vocabs: any[]) => {
        console.log('data ', vocabs);
        this.getResponse(vocabs, vocabs.length - 1, (vocabs: any[]) => {
          console.log('complete response ', vocabs);
          localStorage.downloadedCards = JSON.stringify(vocabs);
        });
      });
  }
  async getResponse(vocabs: any, index: number, success: Function) {
    let response = this.dict.getMeaning('en-gb', vocabs[index].baseForm);
    return response.pipe(map((data: any) => data)).subscribe(
      (data: any) => {
        vocabs[index].meaning = data;
        if (index > 0) {
          this.getResponse(vocabs, index - 1, success);
        } else {
          success(vocabs);
        }
      },
      () => {
        vocabs[index].meaning = {};
        if (index > 0) {
          this.getResponse(vocabs, index - 1, success);
        } else {
          success(vocabs);
        }
      }
    );
  }
  displayCards() {
    this.dict
      .getDownloadedWords()
      .pipe(
        map((words: any) => {
          console.log('words ', words);
          let vocabs: any[] = [];
          words.forEach((vocab: any) => {
            if (!vocabs.some((iv: any) => iv.baseForm == vocab.baseForm)) {
              vocabs.push(vocab);
            }
          });
          return vocabs;
        })
      )
      .subscribe((vocabs: any[]) => {
        this.cards = vocabs;
      });
  }
  printCards(element: HTMLElement) {
    console.log("style ",window.getComputedStyle(element))
    
    console.log('print ', element);
    let doc: jsPDF = new jsPDF('p', 'px', [1000,800]);
      doc.html(element,{
        callback:function (pdf:jsPDF)  {
          doc.save('tech-html-to-pdf.pdf');  
        },
      });
  }
}
