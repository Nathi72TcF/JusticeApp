import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserreportPage } from './userreport.page';

const routes: Routes = [
  {
    path: '',
    component: UserreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserreportPageRoutingModule {}
