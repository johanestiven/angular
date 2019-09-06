import { Component, OnInit } from '@angular/core';
import { empleado } from '../Model/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  constructor() { }

  empleadosArray:empleado[]=[
    {id:1,cedula:"1045264", nombre:"Juan Lopez", cargo:"Tecnico"},
    {id:2,cedula:"4246215", nombre:"Sara Perez", cargo:"Tecnologo"},
    {id:3,cedula:"4514524", nombre:"Camilo Paez", cargo:"Tecnico"}];

    empleadosSelect:empleado= new empleado();
    
    Agregar(){

      if(this.empleadosSelect.id > this.empleadosArray.length){
        this.empleadosArray.push(this.empleadosSelect);
      }
      this.empleadosSelect = new empleado();
    }
  
    Editar(eempleado:empleado){
      this.empleadosSelect = eempleado;
    }
    Eliminar(){
      this.empleadosArray = this.empleadosArray.filter(p=> p!=this.empleadosSelect);
      this.empleadosSelect = new empleado();
    }


}
