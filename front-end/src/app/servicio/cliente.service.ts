import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cliente } from '../modelo/cliente';
import { CLIENTES } from '../modelo/mock-clientes';
import { ClienteRestService } from './cliente-rest.service';



@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(private clienteRestService: ClienteRestService) { }

  getClientes(): Observable<Cliente[]> {
    // TODO: send the message _after_ fetching the heroes
    this.clienteRestService.add('ClienteService: fetched clientes');
    return of(CLIENTES);
  }
}
