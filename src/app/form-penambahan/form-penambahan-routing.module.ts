import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPenambahanPage } from './form-penambahan.page';

const routes: Routes = [
  {
    path: '',
    component: FormPenambahanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPenambahanPageRoutingModule {}
