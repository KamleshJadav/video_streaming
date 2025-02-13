import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewClipsPageRoutingModule } from './preview-clips-routing.module';

import { PreviewClipsPage } from './preview-clips.page';
import { SharedModule } from 'src/app/custom/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewClipsPageRoutingModule,SharedModule
  ],
  declarations: [PreviewClipsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PreviewClipsPageModule { }
