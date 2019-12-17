// Se tiene una colección de aeropuertos(objetos con información de un aeropuerto), y se desea poder obtener un aeropuerto dado su nombre
// •Declarar la estructura de datos adecuada para asociar el nombre de cada aeropuerto con el objeto aeropuerto correspondiente
// •Introducir varios aeropuertos asociados a sus nombres: “El Prat”, “Barajas”, “Castellón”
// •Obtener el objeto aeropuerto dado su nombre: “Barajas”

import {airportsMap, airportsMap2} from './airports.mjs';

const barajasInfo = airportsMap.get('Barajas');
const pratsInfo = airportsMap.get('El Prat');
const castellonInfo = airportsMap.get('Castellón');

const barajasInfo2 = airportsMap2.get('Barajas');
const pratsInfo2 = airportsMap2.get('El Prat');
const castellonInfo2 = airportsMap2.get('Castellón');


console.log(barajasInfo);
console.log(pratsInfo);
console.log(castellonInfo);

console.log('--- Opción 2 ---');

console.log(barajasInfo2);
console.log(pratsInfo2);
console.log(castellonInfo2);

