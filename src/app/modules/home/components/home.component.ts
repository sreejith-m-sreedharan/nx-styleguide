import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'test-app';
  cards:any[] = [];
  cards2:any[] = [];
  active:boolean = false;
  constructor(http:HttpClient){
    let card = {
      name: 'sreejith',
      age: 34,
      img:'../assets/Capture001.png'

    }

    for(let i=0; i< 10000;i++){
      let myCard = {...card,...{name: card.name+i, age: card.age+i}};
      this.cards.push(myCard);
    }
    for(let i=0; i< 20000;i++){
      let myCard = {...card,...{name: 'ajith'+i, age: card.age+i}};
      this.cards2.push(myCard);
    }
    http.get("http://myexample.com").subscribe((response:any)=>{
        console.log("reponse got ",response);
    });
    http.get("http://myexample2.com").subscribe((response:any)=>{
      console.log("reponse got ",response);
  });
  }
}
