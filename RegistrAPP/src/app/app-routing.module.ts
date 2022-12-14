import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { Ingresado2Guard } from './guards/ingresado2.guard';
import { NoIngresado2Guard } from './guards/no-ingresado2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./Pages/camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [IngresadoGuard, NoIngresado2Guard]
  },
  {
    path: 'codigo',
    loadChildren: () => import('./Pages/codigo/codigo.module').then( m => m.CodigoPageModule),
    canActivate: [Ingresado2Guard, NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'asistenciasqr',
    loadChildren: () => import('./pages/asistenciasqr/asistenciasqr.module').then( m => m.AsistenciasqrPageModule)
  },
  {
    path: 'crearasistenciasqr',
    loadChildren: () => import('./pages/crearasistenciasqr/crearasistenciasqr.module').then( m => m.CrearasistenciasqrPageModule)
  },
  {
    path: 'detail-asistencia/:id',
    loadChildren: () => import('./pages/detail-asistencia/detail-asistencia.module').then( m => m.DetailAsistenciaPageModule)
  },
  {
    path: 'update-asistencia/:id',
    loadChildren: () => import('./pages/update-asistencia/update-asistencia.module').then( m => m.UpdateAsistenciaPageModule)
  },
  {
    path: 'delete-asistencia/:id',
    loadChildren: () => import('./pages/delete-asistencia/delete-asistencia.module').then( m => m.DeleteAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
