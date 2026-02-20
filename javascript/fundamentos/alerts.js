// Métodos del objeto global window para navegador

// alert(), muestra un mensaje
alert("Hola, bienvenido!");

// prompt(), pide un dato al usuario
let nombre = prompt("¿Cómo te llamas?");

if (nombre !== null) {
  alert(`Hola ${nombre}!`);
}

// confirm(), confirma una acción (true / false)
let confirmar = confirm("¿Deseas continuar?");

if (confirmar) {
  alert("Continuamos");
} else {
  alert("Cancelado");
}