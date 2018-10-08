import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempFormComponent } from './temp-form/temp-form.component';

const routes: Routes = [
  {
    path:'',
    component: TempFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
