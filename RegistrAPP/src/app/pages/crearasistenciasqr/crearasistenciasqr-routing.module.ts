import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearasistenciasqrPage } from './crearasistenciasqr.page';

const routes: Routes = [
  {
    path: '',
    component: CrearasistenciasqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearasistenciasqrPageRoutingModule {}
