// Crear un ejemplo básico para probar el funcionamiento de los Arrays

// ▪ Declarar una lista de String.
const strings = [
  'hola',
  'adios',
  'paco',
  'patri',
  'luis',
];

console.log(strings);

// ▪ Añadir y eliminar elementos de la lista
// Añadir al final
strings.push('santiago');
console.log(strings);

// Eliminar la posición 2 del array
strings.splice(2, 1);
console.log(strings);

// Eliminar desde la posición 0, 2 elementos del array
strings.splice(0, 2);
console.log(strings);

// ▪ Definir una función addElemToArray(...) que reciba un array de String y un String como parámetro y añada el String al array

function addElementToArray(arr, strg) {
  arr.push(strg);
}

addElementToArray(strings, 'manuela');

console.log(strings);


