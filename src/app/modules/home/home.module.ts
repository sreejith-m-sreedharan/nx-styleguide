import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [   
    CoreModule.forChild(),
    SharedModule,
    HomeRoutingModule
  ],
  providers: [],
})
export class HomeModule { }