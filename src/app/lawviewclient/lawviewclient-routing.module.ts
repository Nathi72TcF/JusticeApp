import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawviewclientPage } from './lawviewclient.page';

const routes: Routes = [
  {
    path: '',
    component: LawviewclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawviewclientPageRoutingModule {}
