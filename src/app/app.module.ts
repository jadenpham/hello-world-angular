import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  //all components being used in app
  declarations: [
    AppComponent,
    TestComponent,
    DirectivesComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //kick starting module when angular starts
  bootstrap: [AppComponent]
})
export class AppModule { }
