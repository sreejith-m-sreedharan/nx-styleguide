import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, loadCounter } from '../../../store/counter/counter.actions';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
})
export class StyleguideComponent {
  title = 'test-app';
  count$: Observable<number>;
   widget1:any = {
    name: "sreejith",
  }

   widget2:any = {
    name: "ranjith"
  }

  constructor(http:HttpClient,private store: Store<{ count: number }>) {
    this.store.dispatch(loadCounter());
    this.count$ = store.select('count');
    this.widget1.data = this.getData(this.widget1);
  }
  getData(widget: any){
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
}
