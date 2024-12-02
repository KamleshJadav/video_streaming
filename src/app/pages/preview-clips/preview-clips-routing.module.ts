import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewClipsPage } from './preview-clips.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewClipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewClipsPageRoutingModule {}
