import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPengambilanPage } from './form-pengambilan.page';

const routes: Routes = [
  {
    path: '',
    component: FormPengambilanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPengambilanPageRoutingModule {}
