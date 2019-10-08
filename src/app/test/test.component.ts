import { Component, OnInit } from '@angular/core';

@Component({
  //different ways to specify selector, diff syntax on html, 3 ways
  selector: '[app-test]',
  //use template: and ` ` for inline template, instead of .html file
  template: `
  <h1 class="text-danger"> yoooo what's good {{name}}</h1>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome " + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{"You are on " + site}}</h2>
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
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
