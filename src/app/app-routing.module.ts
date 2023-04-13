import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: '',
    redirectTo: 'lab1/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'graph',
    data: { title: 'Лабораторна робота №2' },
    loadChildren: () =>
      import('./graph/graph.module').then((m) => m.GraphPageModule),
  },
  {
    path: 'file',
    data: { title: 'Лабораторна робота №3' },
    loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
