"use strict";
/* Este código lo vamos a exportar al archivo Persona.ts */
exports.__esModule = true;
/*
class Persona {

    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    caminar() {
        console.log('Estoy Caminando' + this.kilometros);
    }

    constructor(cuantokilometros:number){
        this.kilometros = cuantokilometros;
    }

}
*/
/* let objetoPersona = new Persona(1000);
objetoPersona.caminar(); */
/* Ahora bien vamos a ver cómo funcionan los módulos de ángular */
/* como una manera de ejemplo vamos a hacer uso de export y de import */
/* Antes de ejecutar el código debemos decirle que importe la clase exportada así: */
/* De esta forma importamos */
var Persona_1 = require("./Persona");
var mobjeto = new Persona_1.Persona(1000);
mobjeto.caminar();
