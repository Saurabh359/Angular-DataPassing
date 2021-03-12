import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Components/parent/parent.component';
import { SecChildComponent } from './Components/parent/sec-child/sec-child.component';
import { FormsModule } from '@angular/forms';
import { FirstChildComponent } from './Components/parent/first-child/first-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstChildComponent,
    SecChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
