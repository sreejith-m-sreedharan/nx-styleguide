import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
})
export class StyleguideComponent {
  title = 'test-app';
   widget1:any = {
    name: "sreejith",
  }

   widget2:any = {
    name: "ranjith"
  }

  constructor(http:HttpClient){
     this.widget1.data = this.getData(this.widget1);

  }
  getData(widget: any){
    return widget.name;
  }
}
