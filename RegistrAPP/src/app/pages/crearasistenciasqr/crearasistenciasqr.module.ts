import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearasistenciasqrPageRoutingModule } from './crearasistenciasqr-routing.module';

import { CrearasistenciasqrPage } from './crearasistenciasqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearasistenciasqrPageRoutingModule
  ],
  declarations: [CrearasistenciasqrPage]
})
export class CrearasistenciasqrPageModule {}
