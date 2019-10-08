import { Component, OnInit } from '@angular/core';

@Component({
  //different ways to specify selector, diff syntax on html, 3 ways
  selector: '[app-test]',
  //use template: and ` ` for inline template, instead of .html file
  //how you normally assign class to a tag
  //with class binding, using [class]="class name", line 11
  //using class attribute and class binding at same time, class attribute becomes dummie attribute w class binding, can only use one or the other
  //can use class binding with boolean, to call it use [class.classname in style] = "classname in component"(boolean), text will show red since hasError = true
  //can also bind multiple with classes using [ngClass] = "classname"
  template: `
  <h1 class="text-danger"> yoooo what's good {{name}}</h1>
  <h2>{{2+2}}</h2>
  <h2 [class]="successClass">{{"Welcome " + name}}</h2>
  <h2 class="text-special" [class]="successClass">{{greetUser()}}</h2>
  <h2 [class.text-danger] = "hasError">{{"You are on " + site}}</h2>
  <h2 [ngClass] = "messageClasses">Hello World</h2>
  <input [id]="myId" type="text" value="Jaden">
  <input [disabled] = "isDisabled" type="text" value="Jaden">
  `,
  // templateUrl: './test.component.html',
  // can also inline template here w `` (backticks)
  // styleUrls: ['./test.component.css']
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  //giving the class an attribute
  public name = "Tan";
  public site = window.location.href;
  public myId = "testId";
  //making disabled dynamic w boolean instead of hard coding it, reason to use property instead of interpolation
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError ,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
