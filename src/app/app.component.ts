import { Component } from '@angular/core';
//decorator telling app it's an angular class
@Component({
  //custom html tag, use to represent component, angular renders template in place
  selector: 'app-root',
  //points to file to render, replace index.html in <app-root>
  templateUrl: './app.component.html',
  //points to css file to style html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  public name = "Jaden";
  //setting message to capture the event from child, need to be same as in selector
  public messages = "";
}


