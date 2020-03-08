import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawviewclientPageRoutingModule } from './lawviewclient-routing.module';

import { LawviewclientPage } from './lawviewclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawviewclientPageRoutingModule
  ],
  declarations: [LawviewclientPage]
})
export class LawviewclientPageModule {}
