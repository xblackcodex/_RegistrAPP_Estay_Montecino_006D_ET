import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciasqrPageRoutingModule } from './asistenciasqr-routing.module';

import { AsistenciasqrPage } from './asistenciasqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciasqrPageRoutingModule
  ],
  declarations: [AsistenciasqrPage]
})
export class AsistenciasqrPageModule {}
