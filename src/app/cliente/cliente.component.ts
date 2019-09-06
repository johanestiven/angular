import { Component, OnInit } from '@angular/core';
import { cliente } from '../Model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  constructor() { }

    clientesArray:cliente[] = [
    {id:1,cedula:"1245635" ,nombre:"Anguie",producto:"tennis"},
    {id:2,cedula:"1245385" ,nombre:"Santiago",producto:"pc"},
    {id:3,cedula:"4895648" ,nombre:"Adriana",producto:"2000 pan"}];
  
  
    clientesSelect:cliente = new cliente();
  
    Agregar(){
  
      if(this.clientesSelect.id > this.clientesArray.length){
        this.clientesArray.push(this.clientesSelect);
      }
      this.clientesSelect = new cliente();
    }
  
    Editar(ccliente:cliente){
      this.clientesSelect = ccliente;
    }
    Eliminar(){
      this.clientesArray = this.clientesArray.filter(p=> p!=this.clientesSelect);
      this.clientesSelect = new cliente();
    }
  

}
