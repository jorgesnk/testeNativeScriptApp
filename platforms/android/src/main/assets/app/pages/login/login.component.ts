import { Component, OnInit } from "@angular/core";
import * as camera from "nativescript-camera";
import { Image } from "ui/image";

@Component({
  moduleId: module.id,
  selector: "list",
  templateUrl: './login.html'
})
export class loginComponent implements OnInit {

  public exibe = '';
  public foto='';
  ngOnInit() {
    var isAvailable = camera.isAvailable(); 
    console.log(isAvailable)
  }

  constructor(){
    

  }
  take() {
    camera.requestPermissions();
    var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
    camera.takePicture(options).
      then((imageAsset) => {
        console.log(JSON.stringify(imageAsset))
        this.foto=imageAsset.android;
        console.log(this.foto)
      }).catch((err) => {
        console.log("Error -> " + err.message);
      });
  }
}