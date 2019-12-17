// chars(): Recibe como parámetros varios Strings y devuelve un único array con todos los caracteres de todos los arrays.

function chars(...rest) {
  const newArr = rest.reduce((acc, word) => [...acc, ...word], []);
  return newArr;
}

function chars2(...rest) {
  const newArr = rest.map((word) => [...word]);
  return newArr.flat();
}

function chars3(...rest) {
  const newArr = rest.reduce((acc, word) => acc.concat(...word), []);
  return newArr.flat();
}

function chars4(...rest) {
  let result = [];
  for (const string of rest) {
    result = [...result, ...string];
  }
  return result;
}

const result1 = chars('hola', 'adios');
const result2 = chars2('hola', 'adios');
const result3 = chars3('hola', 'adios');
const result4 = chars4('hola', 'adios');


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// default(): Recibe un objeto de configuración y devuelve ese mismo objeto pero con todos los
// valores no configurados con sus valores por defecto (usa propiedades y valores por defecto inventadas)

const obj1 = {
  name: 'Patri'
};
const obj2 = {
  city: 'Londres'
};

function defaultFn({ name = 'Paco', lastName = 'García', city = 'Madrid' }) {
  const newObj = {
    name,
    lastName,
    city
  };

  return newObj;
}

const resultObj1 = defaultFn(obj1);
const resultObj2 = defaultFn(obj2);
const resultObj3 = defaultFn({});

console.log(resultObj1);
console.log(resultObj2);
console.log(resultObj3);

// Solución Mica
const defaultConfig = {
  prop1: 0,
  prop2: 1,
  prop: 3,
}

function defaultFn2(config) {

  return { ...defaultConfig, ...config };
}

const resultObj4 = defaultFn2({ prop1: 25 });

console.log(resultObj4);


// params():
// ○ Implementa una función que necesite tres valores
// ○ Cualquier valor es opcional porque tiene valor por defecto (interno)
// ○ En vez de pasar 3 parámetros, pasa un objeto con los valores en propiedades
// ○ Usa destructuring en la definición de parámetros

const paramsObj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const paramsObj2 = {
  a: 1,
  c: 3,
};
function params({ a = 0, b = 0, c = 0 } = {}) {
  console.log(a, b, c);
}

params(paramsObj1);
params(paramsObj2);
params({});
params();

