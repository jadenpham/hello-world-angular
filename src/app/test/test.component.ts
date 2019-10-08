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
  //style binding [style.css property name, ie color] = " 'ie: orange' ";
  //can also use boolean/conditional expression
  template: `
  <h2> Welcome {{name}} </h2>
  <input #myInput type="text">
  <button (click) = "logMessage(myInput.value)">Log</button>
  <!-- $event is a special angular parameter that displays the event info, can also hard code the message if want to -->
  <button (click)="onClick($event)"> Greet </button>
  <button (click)="greet = 'wecome bobby'"> Greet </button>
  {{greet}}
  <!-- <h1 class="text-danger"> yoooo what's good {{name}}</h1> -->
  <h2>{{2+2}}</h2>
  <!--<h2 [class]="successClass">{{"Welcome " + name}}</h2>-->
  <!--<h2 class="text-special" [class]="successClass">{{greetUser()}}</h2>-->
  <!--<h2 [class.text-danger] = "hasError">{{"You are on " + site}}</h2>-->
  <!--<h2 [ngClass] = "messageClasses">Hello World</h2>-->
  <input [id]="myId" type="text" value="Jaden">
  <input [disabled] = "isDisabled" type="text" value="Jaden">
  <h2 [style.color] = "'orange'">Style binding</h2>
  <!-- so if has error is true, make it red, else green -->
  <h2 [style.color] = "hasError ?'red' : 'green' ">Style binding w conditional</h2>
  <!-- can also bind to class attribute so it can change dynamically -->
  <h2 [style.color] = "highlightColor">Still binding to class attribute</h2>
  <!-- can style w multiple with ng directive and bind it to object -->
  <h2 [ngStyle]= "titleStyles">Style binding to an object</h2>
  `,
  // templateUrl: './test.component.html',
  // can also inline template here w `` (backticks)
  // styleUrls: ['./test.component.css']
  //style binding
  styles: []
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
  public highlightColor = "orange";
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError ,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  public titleStyles ={
    color: "blue",
    fontStyle: "italic"
  }
  public greet = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event)
    this.greet = "Welcome hoe";
  }
  logMessage(value){
    console.log(value);
  }
  greetUser(){
    return "Hello " + this.name;
  }

}
