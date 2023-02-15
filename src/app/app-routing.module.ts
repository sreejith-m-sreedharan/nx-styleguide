import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'design' },
  { path: 'dashboard', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  { path: 'style', loadChildren: () => import('./modules/styleguide/styleguide.module').then((m) => m.StyleGuideModule) },
  { path: 'design', loadChildren: () => import('./modules/design/design.module').then((m) => m.DesignModule) },
  
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
