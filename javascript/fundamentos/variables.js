/* var: 
- forma original de declarar variables en JS, solo usar si necesitas compatibilidad antigua
- ámbito de función (si no se declara dentro de una función, se agrega al objeto global window)
- puede reasignarse y redeclararse
*/

var z = 10;

/* let: 
- ámbito de bloque (si se sale del bloque, no se agrega como objeto global window)
- puede reasignarse, no puede redeclararse en el mismo bloque
*/

let x = 10, y = 20; 
let saludo = "Hello " + "world";

/* const:
- constante con ámbito de bloque (igual que let)
- no puede reasignarse ni redeclararse en el mismo bloque, pero objetos/arrays internos sí pueden modificarse
*/

const a = 40;

const b = {name: "unknown", age: 24};
b.name = "known";