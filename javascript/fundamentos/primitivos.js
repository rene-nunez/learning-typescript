let nombre = "Peter";
nombre = "Ivan";

console.log(typeof nombre); // Mostrar tipo de dato

let booleano = false;
console.log(typeof booleano);

let entero = 3;
let puntoFlotante = 3.333;
console.log(typeof entero, typeof puntoFlotante);

let indefinido;
console.log(typeof indefinido);

let objeto = null;
console.log(typeof objeto);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);
console.log(typeof symbol2);
console.log(symbol1 == symbol2); // false