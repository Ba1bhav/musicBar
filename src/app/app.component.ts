import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'audioBar';
  duration(change:any){
    console.log('change',change);

  }
  toNumber(number:string){
    return parseInt(number)
  }


}
