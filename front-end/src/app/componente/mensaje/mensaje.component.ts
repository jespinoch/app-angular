import { Component, OnInit } from '@angular/core';
import { ClienteRestService } from '../../servicio/cliente-rest.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit{

constructor (public clienteRestService: ClienteRestService) {}

ngOnInit () {
}


}




