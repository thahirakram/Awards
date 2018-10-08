import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TempFormComponent } from './temp-form/temp-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ],
  declarations: [TempFormComponent]
})
export class FormModule { }
