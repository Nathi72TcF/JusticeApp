import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawloginPage } from './lawlogin.page';

const routes: Routes = [
  {
    path: '',
    component: LawloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawloginPageRoutingModule {}
