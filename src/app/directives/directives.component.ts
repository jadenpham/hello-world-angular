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
    <div *ngIf = "displayName; then thenBlock; else elseBlock">
    
    </div>
    <ng-template #thenBlock>
      <h2> If true this should pop up</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>If false this should pop up </h2>
    </ng-template>
    
  `,

  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  //setting attribute for ngIf
  displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
