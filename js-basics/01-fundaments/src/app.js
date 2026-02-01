// Variables
/* 
    - let: variables cuyo valor puede cambiar
    - const: constantes cuyo valor no puede cambiar
    - var: igual a let, no recomendado
*/

let x = 10, y = 20;
const z = 30;

let saludo = "Hello " + "World";  // Concatenación de cadenas
let resultado = x * z;

// Console
console.log('%c Saludo:', 'color: blue', saludo);
console.log("Resultado:", resultado);
console.table({x, y, z, saludo});

// Consideración: JS ignora los espacios