import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-directives]',
  // templateUrl: './directives.component.html',
  //reads if true show the h2 tag, else show the ng-template elem, using this to wrap and give it a name so the conditional knows which one to show
  template: `
    <!--<h2 *ngIf = "displayName; else elseBlock">
      test
    </h2>
    <ng-template #elseBlock>
      <h2>
        This should display if false
      </h2>
    </ng-template> -->
    <!-- another way to using ngIf, reads if displayname is true then render ng-template thenBlock, else render elseBlock -->
    <!--<div *ngIf = "displayName; then thenBlock; else elseBlock">
    
    </div>
    <ng-template #thenBlock>
      <h2> If true this should pop up</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>If false this should pop up </h2>
    </ng-template> -->\

    <!-- so if the color is a certain value, display the elem that corresponds to the value, if not use switchdefault if none matches -->
    <!--<div [ngSwitch]="color">
      <div *ngSwitchCase = "'red'">You picked red</div>
      <div *ngSwitchCase = "'blue'">You picked blue</div>
      <div *ngSwitchCase = "'green'">You picked green</div>
      <div *ngSwitchDefault> Pick another color</div>
    </div> -->
    <!-- can use some special key words such as index, first, last, odd, even, add ngif to do more logic -->
    <div *ngFor ="let color of colors; first as f">
      <h2>{{f}} {{color}}</h2>
    </div>
  `,

  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  //setting attribute for ngIf
  public displayName = true;
  public color = "asdf";
  public colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit() {
  }

}
