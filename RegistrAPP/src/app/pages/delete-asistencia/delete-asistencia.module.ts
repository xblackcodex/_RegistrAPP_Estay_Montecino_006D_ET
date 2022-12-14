import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAsistenciaPageRoutingModule } from './delete-asistencia-routing.module';

import { DeleteAsistenciaPage } from './delete-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAsistenciaPageRoutingModule
  ],
  declarations: [DeleteAsistenciaPage]
})
export class DeleteAsistenciaPageModule {}
