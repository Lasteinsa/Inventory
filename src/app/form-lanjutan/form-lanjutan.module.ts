import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormLanjutanPageRoutingModule } from './form-lanjutan-routing.module';

import { FormLanjutanPage } from './form-lanjutan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormLanjutanPageRoutingModule
  ],
  declarations: [FormLanjutanPage]
})
export class FormLanjutanPageModule {}
