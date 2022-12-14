import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[]; 


  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private toast: ToastController, 
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'tipo' : new FormControl("", Validators.required),
                  'nombre' : new FormControl("", Validators.required), 
                  'apellido' : new FormControl("", Validators.required),
                  'rut' : new FormControl("", Validators.required),
                  'correo' : new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(12),
                   
                  ])), 
                  'confirmaPass': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(12),
                    
                  ])),
              });
            }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid){
      this.alertError();
    }

    else{
    this.newUsuario.tipUsuario=form.tipo;
    this.newUsuario.nomUsuario=form.nombre;
    this.newUsuario.apeUsuario=form.apellido;
    this.newUsuario.rutUsuario=form.rut;
    this.newUsuario.correoUsuario=form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario=form.confirmaPass;

    this.registroService.getUsuarios().then(datos=>{ 
    this.usuarios = datos;

    if (!datos || datos.length==0){
      this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
        this.newUsuario=<Usuario>{};
        this.showToast('Usuario Creado correctamente');
      });
      this.formularioRegistro.reset();
      this.navController.navigateRoot('login');
    }else{
    
    for (let obj of this.usuarios){
      if (this.newUsuario.correoUsuario == obj.correoUsuario || this.newUsuario.rutUsuario == obj.rutUsuario){
        existe = 1;
      }
    }//findelmetodo
      if (existe == 1){
        this.alertCorreoDuplicado();
        this.formularioRegistro.reset();
      }
      else{
        this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
          this.newUsuario=<Usuario>{};
          this.showToast('Usuario Creado satisfactoriamente');
        });
        this.formularioRegistro.reset();
        this.navController.navigateRoot('login');
          }
        }
      })
    }
  } 


  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo o rut ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }


}