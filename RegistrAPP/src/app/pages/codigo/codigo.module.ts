import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRCodeModule } from 'angularx-qrcode';

import { CodigoPageRoutingModule } from './codigo-routing.module';

import { CodigoPage } from './codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    CodigoPageRoutingModule
  ],
  declarations: [CodigoPage]
})
export class CodigoPageModule {}
