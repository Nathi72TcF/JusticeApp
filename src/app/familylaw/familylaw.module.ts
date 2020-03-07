import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilylawPageRoutingModule } from './familylaw-routing.module';

import { FamilylawPage } from './familylaw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilylawPageRoutingModule
  ],
  declarations: [FamilylawPage]
})
export class FamilylawPageModule {}
