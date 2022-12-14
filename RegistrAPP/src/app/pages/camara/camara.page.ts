import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions  } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  image: string;
  constructor(private menuController:MenuController, private camera: Camera) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  camara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then( ( imageData ) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      console.log(err);
     });

  }


}
