import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleguideComponent } from './components/styleguide.component';

const routes: Routes = [
  {
    path: '',
    component: StyleguideComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleguideRoutingModule {}

