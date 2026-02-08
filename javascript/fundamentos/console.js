// MÉTODOS DISPONIBLES

// Mensajes
console.log("mensaje general"); // muestra un mensaje general
console.info("mensaje informativo"); // muestra información
console.warn("advertencia"); // muestra un mensaje de advertencia
console.debug("mensaje de depuración"); // muestra un mensaje de nivel debug
console.error("ocurrió un error"); // muestra un mensaje de error

// Afirmación
console.assert(2 > 3, "if false"); // muestra el error si la condición es falsa

// Contador
console.count("contador"); // cuenta cuántas veces se ejecuta esta línea de uno en uno
console.countReset("contador"); // reinicia el contador indicado

// Visualización
console.dir({ nombre: "Ana", edad: 25 }); // muestra las propiedades de un objeto
console.dirxml(document.body); // muestra el árbol XML/HTML del elemento

// Grupo
console.group("grupo"); // inicia un grupo de mensajes
console.log("dentro del grupo");
console.groupEnd(); // finaliza el grupo

console.groupCollapsed("grupo colapsado"); // inicia un grupo colapsado
console.log("contenido oculto");
console.groupEnd(); // finaliza el grupo colapsado

// Tabla
console.table([{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]); // muestra objetos y arrays en forma de tabla

// Temporizador
console.time("temporizador"); // inicia un temporizador
console.timeEnd("temporizador"); // detiene el temporizador y muestra el tiempo
console.timeLog("temporizador"); // muestra el tiempo actual del temporizador
console.timeStamp("marca"); // agrega una marca de tiempo en las herramientas (no estándar)

// Performance
console.profile() // inicia el profiler del navegador
console.profileEnd() // detiene el profiler y muestra el resultado en la herramienta de rendimiento

// Otros
console.trace("Traza"); // muestra la traza de la pila de llamadas
console.clear(); // limpia la consola