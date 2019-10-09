import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';

@NgModule({
  //all components being used in app
  declarations: [
    AppComponent,
    TestComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  //kick starting module when angular starts
  bootstrap: [AppComponent]
})
export class AppModule { }
