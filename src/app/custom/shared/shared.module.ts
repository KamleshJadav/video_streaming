import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from '../components/popover/popover.component';
import { HashtegPipe } from './pipes/hashteg.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    PopoverComponent,HashtegPipe,ShortNumberPipe,TruncatePipe
  ],
  imports: [
    CommonModule
  ], exports: [
    PopoverComponent,
    HashtegPipe,
    TruncatePipe,
    ShortNumberPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
