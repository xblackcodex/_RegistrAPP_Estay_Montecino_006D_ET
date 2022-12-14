import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaqrService } from 'src/app/services/asistenciaqr.service';

@Component({
  selector: 'app-detail-asistencia',
  templateUrl: './detail-asistencia.page.html',
  styleUrls: ['./detail-asistencia.page.scss'],
})
export class DetailAsistenciaPage  {

  asistencia = {
    id: [],
    seccion: [],
    fecha: []
  }

  qrCodeString= this.asistencia.seccion; 
  qrCodeString2= this.asistencia.fecha; 
  scannedResult:any;
  scannedResult2:any;

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
  
  usuario={
    nom:'',
  }  
  generaScan(){
    this.qrCodeString= this.asistencia.seccion;
    this.qrCodeString2= this.asistencia.fecha;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
    this.scannedResult2=this.qrCodeString2;
  }
}
