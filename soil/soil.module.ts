import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoilPageRoutingModule } from './soil-routing.module';

import { SoilPage } from './soil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoilPageRoutingModule
  ],
  declarations: [SoilPage]
})
export class SoilPageModule {}
