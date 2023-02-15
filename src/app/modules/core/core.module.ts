import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MockResponseInterceptor } from './interceptors/MockResponseInterceptor';
import { UserService } from '../../api/user/user.service';
@NgModule({
  declarations: [
    
  ],
  imports:[

  ],
  providers: [ { 
    provide: HTTP_INTERCEPTORS, useClass: MockResponseInterceptor, multi:true
  },
  MockResponseInterceptor],
  
})
export class CoreModule {
  static forRoot(): ModuleWithProviders{
    return{
        ngModule:CoreModule,
        providers:[MockResponseInterceptor,UserService]
    };
  }
   
   static forChild(): ModuleWithProviders{
    return{
      ngModule:CoreModule,
      providers:[MockResponseInterceptor,UserService]
    };
  }
 }
