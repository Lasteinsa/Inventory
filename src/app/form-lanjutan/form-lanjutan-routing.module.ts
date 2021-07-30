import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLanjutanPage } from './form-lanjutan.page';

const routes: Routes = [
  {
    path: '',
    component: FormLanjutanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormLanjutanPageRoutingModule {}
