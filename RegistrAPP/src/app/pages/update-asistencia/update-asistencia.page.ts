import { Component, OnInit } from '@angular/core';
import { AsistenciaqrService } from 'src/app/services/asistenciaqr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-asistencia',
  templateUrl: './update-asistencia.page.html',
  styleUrls: ['./update-asistencia.page.scss'],
})
export class UpdateAsistenciaPage {

  asistencia = {
    id: 0,
    seccion: "",
    fecha: ""
  }

  constructor(private asistenciaqrService: AsistenciaqrService, 
    private router: Router) { }

  ionViewWillEnter(){
    this.getAsistenciaByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
      return id
  }

  getAsistenciaByID(asistenciaID:Number){
    this.asistenciaqrService.getAsistenciaByID(asistenciaID).subscribe(
      (resp:any) => {
        this.asistencia = {
          id: resp[0].id,
          seccion: resp[0].seccion,
          fecha: resp[0].fecha
        }
      }
    )
  }

  updateAsistencia(){
    this.asistenciaqrService.actualizarAsistencia(this.asistencia).subscribe()
    this.router.navigateByUrl("/asistenciasqr")
  }
}
