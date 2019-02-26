"use strict";
/* Para que no nos de error tenemos que colocarle delante de la clase Persona la palabra reservada de .ts "export" */
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(cuantokilometros) {
        this.kilometros = cuantokilometros;
    }
    Persona.prototype.caminar = function () {
        console.log('Estoy Caminando' + this.kilometros);
    };
    return Persona;
}());
exports.Persona = Persona;
