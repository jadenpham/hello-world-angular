import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "Jaden"
  public message = "Welcome to the site my hoes";
  public person = {
    name: "Jaden", age:24, ethnicity: "Viet"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
