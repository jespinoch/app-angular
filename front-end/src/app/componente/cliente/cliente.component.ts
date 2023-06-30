import { Component, OnInit } from '@angular/core';
import { Cliente} from '../../modelo/cliente';
import { CLIENTES } from '../../modelo/mock-clientes';
import { ClienteService } from '../../servicio/cliente.service';
import { ClienteRestService } from '../../servicio/cliente-rest.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit { // OnInit is an interface that defines the method ngOnInit.

  clientes = CLIENTES;

  cliente:  Cliente = {
    id: 0,
    nombre: 'Jorge Espinoza',
    correo: 'jorge.e2008@gmail.com',
    telefono: '993919600',
    direccion: 'Av. Del Parque Sur 468'
  }
  selectedCliente:  Cliente = {
    id: 0,
    nombre: 'Jorge Espinoza',
    correo: 'jorge.e2008@gmail.com',
    telefono: '993919600',
    direccion: 'Av. Del Parque Sur 468'
  }

  constructor(private clienteService: ClienteService,
     private clienteRestService: ClienteRestService) { }

  ngOnInit() {
    this.getClientes();
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
    this.clienteRestService.add(`ClienteComponent: Selected cliente id=${cliente.id}`);

  }

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }


}
