import { NgModule } from '@angular/core';
import { StyleguideComponent } from './components/styleguide.component';
import { StyleguideRoutingModule } from './styleguide-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    StyleguideComponent
  ],
  imports: [   
    CoreModule.forChild(),
    SharedModule,
    StyleguideRoutingModule
  ],
  providers: [],
})
export class StyleGuideModule { }