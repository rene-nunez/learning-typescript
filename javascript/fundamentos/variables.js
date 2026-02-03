/* var: 
- forma original de declarar variables en JS, solo usar si necesitas compatibilidad antigua
- variable con ámbito de función
- puede reasignarse y redeclararse
*/

var z = 10;

/* let: 
- variable con ámbito de bloque
- puede reasignarse
- no puede redeclararse en el mismo bloque
*/

let x = 10, y = 20; 
let saludo = "Hello " + "world";

/* const:
- constante con ámbito de bloque
- no puede reasignarse, pero objetos/arrays internos sí pueden modificarse
*/

const a = 40;

const b = {name: "unknown", age: 24};
b.name = "known";