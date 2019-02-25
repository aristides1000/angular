/* var sumarNumeros = function(parametro1: number, parametro2: number){ //esta es la única parte que cambia del código que estamos estudiando
    return parametro1 + parametro2;
};

let resultado = sumarNumeros(100, 200);

console.log('resultado ' + resultado); */

/* La anterior es la forma tradicional de las funciones (funciones tradicionales) */

/* esta sería la forma de construir una función tipo flecha */

var sumarNumeros = (parametro1: number, parametro2: number) => { /* Esta es la única parte que cambia del código */
    return parametro1 + parametro2;
};

let resultado = sumarNumeros(100, 200);

console.log('resultado ' + resultado);