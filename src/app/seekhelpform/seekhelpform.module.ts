import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeekhelpformPageRoutingModule } from './seekhelpform-routing.module';

import { SeekhelpformPage } from './seekhelpform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeekhelpformPageRoutingModule
  ],
  declarations: [SeekhelpformPage]
})
export class SeekhelpformPageModule {}
