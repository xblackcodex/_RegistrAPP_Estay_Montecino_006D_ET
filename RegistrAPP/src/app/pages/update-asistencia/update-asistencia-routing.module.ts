import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAsistenciaPage } from './update-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAsistenciaPageRoutingModule {}
