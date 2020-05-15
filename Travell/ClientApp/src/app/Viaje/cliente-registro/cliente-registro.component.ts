import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Ruta } from '../models/ruta';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  cliente:Cliente;
  ruta: Ruta;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();
  }
  add(){
    this.clienteService.post(this.cliente).subscribe(p=>{
      if(p!=null){
        alert('cliente Creado!');
        this.cliente=p;
      }
    });
  }
}
