import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "list",
  templateUrl: './list.html'
})
export class listComponent {


  public valor = "teste"

  onTap() {
    alert('ola')
  }


}
