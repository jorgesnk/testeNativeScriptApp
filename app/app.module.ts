import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {listComponent } from '../app/pages/list/list.component'
import { AppComponent } from "./app.component";
import {routes} from'./app.routing';
import{loginComponent} from'./pages/login/login.component'
import { NativeScriptRouterModule} from "nativescript-angular/router";


@NgModule({
  imports: [NativeScriptModule,NativeScriptFormsModule,
    NativeScriptRouterModule,NativeScriptRouterModule.forRoot(routes)],
  declarations: [AppComponent,listComponent,loginComponent],
  bootstrap: [AppComponent,listComponent,loginComponent]
})
export class AppModule {}
