import { Component } from '@angular/core';
import { ClienteRestService } from 'src/app/servicio/cliente-rest.service';


@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.css']
})
export class ClienteListadoComponent {

  constructor(public clienteRestService: ClienteRestService) {}

  ngOnInit() {
  }
}
