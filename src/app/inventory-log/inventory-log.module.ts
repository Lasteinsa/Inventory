import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryLogPageRoutingModule } from './inventory-log-routing.module';

import { InventoryLogPage } from './inventory-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryLogPageRoutingModule
  ],
  declarations: [InventoryLogPage]
})
export class InventoryLogPageModule {}
