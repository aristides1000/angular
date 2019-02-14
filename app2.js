function pruebaDeCursoAngular(parametro1, parametro2 /* Aquí le estoy asignando de una el valor a la variable */, parametro3) {
    if (parametro2 === void 0) { parametro2 = "Hola mundo"; }
    console.log("cadena 1 " + parametro1);
    console.log("cadena 2 " + parametro2);
    console.log("cadena 3 " + parametro3);
}
pruebaDeCursoAngular("Diego");
pruebaDeCursoAngular("Diego", "Herrera", "Es feliz");
