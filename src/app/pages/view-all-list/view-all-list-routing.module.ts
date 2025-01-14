import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllListPage } from './view-all-list.page';
import { pipe } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: ViewAllListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllListPageRoutingModule {}
