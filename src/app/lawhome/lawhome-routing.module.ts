import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawhomePage } from './lawhome.page';

const routes: Routes = [
  {
    path: '',
    component: LawhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawhomePageRoutingModule {}
