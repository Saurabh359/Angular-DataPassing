import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path:'', component: ParentComponent},
  { path:'parent', component: ParentComponent},
  { path:'reactiveform', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
