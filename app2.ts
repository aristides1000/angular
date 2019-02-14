function pruebaDeCursoAngular(parametro1: string, parametro2: string = "Hola mundo"/* Aquí le estoy asignando de una el valor a la variable */, parametro3?: string){/* Al colocar al nombre de la variable  esto parametro3? quiere decir que el valor de la variable es opcional */
    console.log("cadena 1 " + parametro1);
    console.log("cadena 2 " + parametro2);
    console.log("cadena 3 " + parametro3);
}

pruebaDeCursoAngular("Diego");
pruebaDeCursoAngular("Diego", "Herrera", "Es feliz");