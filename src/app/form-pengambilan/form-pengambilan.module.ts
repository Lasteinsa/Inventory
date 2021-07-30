import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FormPengambilanPageRoutingModule } from './form-pengambilan-routing.module';

import { FormPengambilanPage } from './form-pengambilan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPengambilanPageRoutingModule
  ],
  declarations: [FormPengambilanPage]
})
export class FormPengambilanPageModule {}
