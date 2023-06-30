import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componente/cliente/cliente.component';
import { ClienteListadoComponent } from './componente/cliente-listado/cliente-listado.component';
import { MensajeComponent } from './componente/mensaje/mensaje.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteListadoComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
