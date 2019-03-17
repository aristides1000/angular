import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  titulo: any = 'hola mundo codigointeractivo'; /* Va con comillas simples */
  datos: any = { Nombre: 'Diego', Apellido: 'Herrera', Edad: '18', Documento: '22334455' };
}
