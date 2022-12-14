import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAsistenciaPageRoutingModule } from './update-asistencia-routing.module';

import { UpdateAsistenciaPage } from './update-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAsistenciaPageRoutingModule
  ],
  declarations: [UpdateAsistenciaPage]
})
export class UpdateAsistenciaPageModule {}
