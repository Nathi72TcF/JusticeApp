import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawhomePageRoutingModule } from './lawhome-routing.module';

import { LawhomePage } from './lawhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawhomePageRoutingModule
  ],
  declarations: [LawhomePage]
})
export class LawhomePageModule {}
