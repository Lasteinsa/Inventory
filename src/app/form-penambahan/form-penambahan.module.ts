import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { FormPenambahanPageRoutingModule } from './form-penambahan-routing.module';

import { FormPenambahanPage } from './form-penambahan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormPenambahanPageRoutingModule
  ],
  declarations: [FormPenambahanPage]
})
export class FormPenambahanPageModule {}
