/* Ejemplo de la utilización de promesa o promise */
var mipromesa = new Promise(function (resolve, reject) {
    /* Las que siguen a continuación son dos funciones callback */
    //resolve(); /* Si yo digo resolve estaría diciendo que la promesa se ejecutó sin problemas */
    reject(); /* Si yo digo reject estaría diciendo que la promesa se ejecutó sin problemas */
});
mipromesa.then(function () {
    /* Aquí iría la función de la operación promesa exitosa */
    console.log('La operación de la promesa a finalizado con éxito');
}, function () {
    /* Aquí iría la función de la operación promesa con error */
    console.log('La operación de la promesa a finalizado con error');
});
