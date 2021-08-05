import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankPage } from './blank.page';

const routes: Routes = [
  {
    path: '',
    component: BlankPage,
    children : [
      {
        path: 'form-pengambilan',
        children: [
          {
            path: '',
            loadChildren: () => import('../form-pengambilan/form-pengambilan.module').then( m => m.FormPengambilanPageModule)
          }
        ]
      },
      {
        path: 'form-penambahan',
        children: [
          {
            path: '',
            loadChildren: () => import('../form-penambahan/form-penambahan.module').then( m => m.FormPenambahanPageModule)
          }
        ]
      },
      {
        path: 'inventory-log',
        children: [
          {
            path: '',
            loadChildren: () => import('../inventory-log/inventory-log.module').then( m => m.InventoryLogPageModule)
          }
        ]
      },
      {
        path: 'inventory-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../inventory-list/inventory-list.module').then( m => m.InventoryListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/blank/inventory-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/blank/blank/form-pengambilan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankPageRoutingModule {}
