import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  titulo: any = 'Hola mundo codigointeractivo';
  datos: any = { Nombre: 'Diego', Apellido: 'Herrera', Edad: 18, Documento: '233455651'};

  eventoBoton() {
    console.log('Ejecutamos el evento indicado para el control');
  }

}
