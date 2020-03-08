import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawloginPageRoutingModule } from './lawlogin-routing.module';

import { LawloginPage } from './lawlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawloginPageRoutingModule
  ],
  declarations: [LawloginPage]
})
export class LawloginPageModule {}
