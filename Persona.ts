/* Para que no nos de error tenemos que colocarle delante de la clase Persona la palabra reservada de .ts "export" */

export class Persona {

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