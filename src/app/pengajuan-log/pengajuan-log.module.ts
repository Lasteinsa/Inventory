import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengajuanLogPageRoutingModule } from './pengajuan-log-routing.module';

import { PengajuanLogPage } from './pengajuan-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengajuanLogPageRoutingModule
  ],
  declarations: [PengajuanLogPage]
})
export class PengajuanLogPageModule {}
