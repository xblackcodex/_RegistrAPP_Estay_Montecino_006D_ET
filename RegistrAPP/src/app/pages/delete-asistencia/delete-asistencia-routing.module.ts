import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAsistenciaPage } from './delete-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAsistenciaPageRoutingModule {}
