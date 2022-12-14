import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAsistencia } from '../interface/iasistencia';
import { AsistenciaqrService } from 'src/app/services/asistenciaqr.service';

@Component({
  selector: 'app-crearasistenciasqr',
  templateUrl: './crearasistenciasqr.page.html',
  styleUrls: ['./crearasistenciasqr.page.scss'],
})
export class CrearasistenciasqrPage implements OnInit {

  newAsistencia: IAsistencia = {
    seccion: "",
    fecha: ""
  }

  constructor(private AsistenciaqrService: AsistenciaqrService, 
    private router: Router) { }

  ngOnInit() {
  }

  crearAsistencia(){
    this.AsistenciaqrService.crearAsistencia(this.newAsistencia).subscribe();
    this.router.navigateByUrl("/asistenciasqr");
  }

}
