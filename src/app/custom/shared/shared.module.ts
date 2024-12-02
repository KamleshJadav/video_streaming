import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from '../components/popover/popover.component';



@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    PopoverComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
