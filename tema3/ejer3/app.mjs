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

const flightsFromMadrid = getFlightsByOrigin('Madrid');
const flightsDestinationMalaga = getFlightsByDestination('Malaga');
const flightsResult = getFlights();
const citiesResult = getCities();


console.log(flightsFromMadrid);
console.log(flightsDestinationMalaga);
console.log(flightsResult);
console.log(citiesResult);

