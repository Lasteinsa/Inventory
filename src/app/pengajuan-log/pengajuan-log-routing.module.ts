import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengajuanLogPage } from './pengajuan-log.page';

const routes: Routes = [
  {
    path: '',
    component: PengajuanLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengajuanLogPageRoutingModule {}
