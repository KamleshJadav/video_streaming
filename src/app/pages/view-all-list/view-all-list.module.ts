import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllListPageRoutingModule } from './view-all-list-routing.module';

import { ViewAllListPage } from './view-all-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllListPageRoutingModule
  ],
  declarations: [ViewAllListPage]
})
export class ViewAllListPageModule {}
