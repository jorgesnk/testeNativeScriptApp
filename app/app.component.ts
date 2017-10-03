import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: './app.html'

})
export class AppComponent {
  public valor = 0;
  public log=false;
  public vetor = [""];
  constructor() {
    for (var i = 0; i < 5; i++) {
      this.vetor[i] = "teste"
  
    }

  }
  teste() {
    this.valor++;
    alert('entrei')
  }

  btn(){
    this.log=true;
  }


}