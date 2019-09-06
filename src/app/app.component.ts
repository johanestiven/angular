import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjemploAngular';

  constructor(private route:Router) {}

    ClickProducto(){
      this.route.navigate(["Producto"]);
    }

    ClickEmpleado(){
      this.route.navigate(["Empleado"]);
    }

    ClickCliente(){
      this.route.navigate(["Cliente"]);
    }
}
