# Notas

## Sintaxis

- Reasignar es cambiar el valor a una variable existente, redeclarar es volver a declarar la variable en el mismo ámbito.
- JavaScript ignora los espacios, salvo en strings y nombres de variables.
- Undefined es el valor default cuando no se asigna un valor explícito.
- El objeto window en la consola del navegador permite ver todos los métodos de este. En NodeJS no existe el objeto.

## Ámbito (scope)

Define dónde una variable es accesible:

- Ámbito de función: la variable solo existe dentro de una función (`var`).
- Ámbito de bloque: la variable solo existe dentro de un bloque ({}) (`let` y `const`).
- Ámbito global: la variable existe en todo el script.

## Buenas prácticas

- La etiqueta src debería estar al final del body en un documento HTML.