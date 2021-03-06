import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
        path: 'inventory-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../inventory-list/inventory-list.module').then( m => m.InventoryListPageModule)
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
        path: '',
        redirectTo: '/home/inventory-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/home/inventory-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
