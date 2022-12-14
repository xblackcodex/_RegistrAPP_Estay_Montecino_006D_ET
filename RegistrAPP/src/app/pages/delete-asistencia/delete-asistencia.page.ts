import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaqrService } from 'src/app/services/asistenciaqr.service';

@Component({
  selector: 'app-delete-asistencia',
  templateUrl: './delete-asistencia.page.html',
  styleUrls: ['./delete-asistencia.page.scss'],
})
export class DeleteAsistenciaPage {

  asistencia = {
    id: 0,
    seccion: "",
    fecha: ""
  }

  constructor(private asistenciaqrService: AsistenciaqrService, private router: Router) { }

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

  eliminarAsistencia(){
    this.asistenciaqrService.eliminarAsistencia(this.asistencia).subscribe()
    this.router.navigateByUrl("/asistenciasqr")
  }

}
