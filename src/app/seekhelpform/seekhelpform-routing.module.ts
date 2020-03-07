import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekhelpformPage } from './seekhelpform.page';

const routes: Routes = [
  {
    path: '',
    component: SeekhelpformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeekhelpformPageRoutingModule {}
