import { NgModule } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { TextFieldComponent } from './components/text-field/text-field.component';

@NgModule({
  declarations: [
    TextFieldComponent
  ],
  imports: [
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    TextFieldComponent
  ],
  providers: [],
  
})
export class ThemeModule { }