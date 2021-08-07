import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form-pengajuan',
    loadChildren: () => import('./form-pengajuan/form-pengajuan.module').then( m => m.FormPengajuanPageModule)
  },
  {
    path: 'form-pengambilan',
    loadChildren: () => import('./form-pengambilan/form-pengambilan.module').then( m => m.FormPengambilanPageModule)
  },
  {
    path: 'form-edit/:id',
    loadChildren: () => import('./form-edit/form-edit.module').then( m => m.FormEditPageModule)
  },
  {
    path: 'form-lanjutan/:id',
    loadChildren: () => import('./form-lanjutan/form-lanjutan.module').then( m => m.FormLanjutanPageModule)
  },
  {
    path: 'form-penambahan',
    loadChildren: () => import('./form-penambahan/form-penambahan.module').then( m => m.FormPenambahanPageModule)
  },
  {
    path: 'inventory-log',
    loadChildren: () => import('./inventory-log/inventory-log.module').then( m => m.InventoryLogPageModule)
  },
  {
    path: 'blank',
    loadChildren: () => import('./blank/blank.module').then( m => m.BlankPageModule)
  },
  {
    path: 'inventory-list',
    loadChildren: () => import('./inventory-list/inventory-list.module').then( m => m.InventoryListPageModule)
  },
  {
    path: 'pengajuan-log',
    loadChildren: () => import('./pengajuan-log/pengajuan-log.module').then( m => m.PengajuanLogPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
