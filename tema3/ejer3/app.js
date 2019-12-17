// Implementar una aplicación que permita gestionar en memoria un conjunto de viajes de una aerolínea
// • Cada viaje se representa con la ciudad origen, destino y la duración del viaje
// • Se dan de alta los viajes en un gestor (clase o módulo GestorViajes)
// • Al gestor de viajes se le pueden pedir:
// ▪ Devolver todos los viajes que tienen una determinada ciudad origen
// ▪ Devolver todos los viajes que tienen una determinada ciudad destino
// ▪ Devolver todos los viajes
// ▪ Devolver todas las ciudades en las que hay viajes
// • Hay que conseguir el menor tiempo de ejecución de las consultas, aunque sean necesarias varias estructuras de datos

import { getCities, getFlights, getFlightsByDestination, getFlightsByOrigin } from './flights.js';

let hrstart1 = process.hrtime();
const flightsFromMadrid = getFlightsByOrigin('Madrid');
console.log(flightsFromMadrid);
let hrend1 = process.hrtime(hrstart1);
console.log("Execution time of getFlightsByOrigin (hr): ", hrend1[0], hrend1[1]/1000000);

let hrstart2 = process.hrtime();
const flightsDestinationMalaga = getFlightsByDestination('Malaga');
console.log(flightsDestinationMalaga);
let hrend2 = process.hrtime(hrstart2);
console.log("Execution time of getFlightsByDestination (hr): ", hrend2[0], hrend2[1]/1000000);

let hrstart3 = process.hrtime();
const flightsResult = getFlights();
console.log(flightsResult);
let hrend3 = process.hrtime(hrstart3);
console.log("Execution time of getFlights (hr): ", hrend3[0], hrend3[1]/1000000);

let hrstart4 = process.hrtime();
const citiesResult = getCities();
console.log(citiesResult);
let hrend4 = process.hrtime(hrstart4);
console.log("Execution time of getCities (hr): ", hrend4[0], hrend4[1]/1000000);
