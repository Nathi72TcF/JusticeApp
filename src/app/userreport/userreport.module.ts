import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserreportPageRoutingModule } from './userreport-routing.module';

import { UserreportPage } from './userreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserreportPageRoutingModule
  ],
  declarations: [UserreportPage]
})
export class UserreportPageModule {}
