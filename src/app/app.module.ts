import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Components/parent/parent.component';
import { SecChildComponent } from './Components/parent/sec-child/sec-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstChildComponent } from './Components/parent/first-child/first-child.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstChildComponent,
    SecChildComponent,
    ReactiveFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
