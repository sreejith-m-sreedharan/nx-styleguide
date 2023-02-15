import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from '../theme/theme.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    ThemeModule,
    HttpClientModule,
  ],
  exports:[
    ThemeModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  
})
export class SharedModule { }