import { NgModule } from '@angular/core';
import { DesignComponent } from './components/design.component';
import { DesignRoutingModule } from './design-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    DesignComponent
  ],
  imports: [   
    CoreModule.forChild(),
    SharedModule,
    DesignRoutingModule
  ],
  providers: [],
})
export class DesignModule { }