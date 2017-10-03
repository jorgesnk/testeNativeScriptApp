import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {listComponent } from '../app/pages/list/list.component'
import { AppComponent } from "./app.component";

@NgModule({
  imports: [NativeScriptModule,NativeScriptFormsModule],
  declarations: [AppComponent,listComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
