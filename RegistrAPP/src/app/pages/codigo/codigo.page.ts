import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {

  qrCodeString= '';
  qrCodeString2= '';
  scannedResult: any;
  scannedResult2: any;

  constructor(private menuController:MenuController) { }

  usuario={
    modul:'',
    fecha:'',
  }

  generarQR(){
    this.qrCodeString = this.usuario.modul;
    this.qrCodeString2 = this.usuario.fecha;
  }

  VerQR(){
    this.scannedResult = this.qrCodeString;
    this.scannedResult2 = this.qrCodeString2;
  }
  
  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
