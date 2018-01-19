import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  template: `

  <p>{{ someProperty }}</p>


  <h1>Hey guys!</h1>
  <button [disabled]="buttonStatus">My Button</button>
  <button (mouseenter)="myEvent($event)">My Event button</button>
  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService:DataService){

  }
  someProperty:string = '';
  ngOnInit(){
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

 angularLogo = 'data:image/png;base64,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';
  buttonStatus = false

  myEvent(event){
    console.log(event);
  
  }

}
