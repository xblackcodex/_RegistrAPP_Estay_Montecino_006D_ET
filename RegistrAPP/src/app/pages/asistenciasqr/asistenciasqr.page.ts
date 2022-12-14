import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AsistenciaqrService } from 'src/app/services/asistenciaqr.service';

@Component({
  selector: 'app-asistenciasqr',
  templateUrl: './asistenciasqr.page.html',
  styleUrls: ['./asistenciasqr.page.scss'],
})
export class AsistenciasqrPage implements OnInit {

  asistencias=[]

  constructor(private asistenciaqrService: AsistenciaqrService, private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.loadAsistencias();
  }

  async loadAsistencias(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..", 
      spinner: "bubbles"
    });
    await loading.present();

    this.asistenciaqrService.listarAsistencia().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)     //debemos convertir a string el json que recibimos para el arreglo animalitos
        this.asistencias = JSON.parse(listString)
        event?.target.complete();
        console.log(this.asistencias);
      }, 
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
