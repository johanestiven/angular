import { Component, OnInit } from '@angular/core';
import { producto } from '../Model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  constructor() { }

  productosArray:producto[] = [
  {id:1,nombre:"Samsung",stock:100,precio:1000000},
  {id:2,nombre:"HP",stock:50,precio:2000000},
  {id:3,nombre:"Asus",stock:80,precio:3000000}];


  productosSelect:producto = new producto();

  Agregar(){

    if(this.productosSelect.id > this.productosArray.length){
      this.productosArray.push(this.productosSelect);
    }
    this.productosSelect = new producto();
  }

  Editar(pproducto:producto){
    this.productosSelect = pproducto;
  }
  Eliminar(){
    this.productosArray = this.productosArray.filter(p=> p!=this.productosSelect);
    this.productosSelect = new producto();
  }

}
