import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from '../Home/hom/hom.component';
 
const routes : Routes = [
  {
    path:'',
    component: HomComponent
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
