import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilylawPage } from './familylaw.page';

const routes: Routes = [
  {
    path: '',
    component: FamilylawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilylawPageRoutingModule {}
