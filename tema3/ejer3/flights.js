const flight1 = {
  origin: 'Madrid',
  destination: 'Malaga',
  time: '1h'
}
const flight2 = {
  origin: 'Madrid',
  destination: 'Bilbao',
  time: '1h'
}
const flight3 = {
  origin: 'Bilbao',
  destination: 'Malaga',
  time: '1h'
}
const flight4 = {
  origin: 'Bilbao',
  destination: 'Zaragoza',
  time: '1h'
}
const flight5 = {
  origin: 'zaragoza',
  destination: 'Madrid',
  time: '1h'
}

let allFlights = [];
let allCities = new Set();
let flightsMapByOrigin = new Map();
let flightsMapByDestination = new Map();

function addFlight(flight) {
  allFlights.push(flight);

  allCities.add(flight.origin);
  allCities.add(flight.destination);

  addFlightByCity(flightsMapByOrigin, flight, flight.origin);
  addFlightByCity(flightsMapByDestination, flight, flight.destination);
}

function addFlightByCity(map, flight, city){
  let v = map.get(city);
  if(!v){
      map.set(city, [flight]);
  } else {
      v.push(flight);
  }
}

addFlight(flight1)
addFlight(flight2)
addFlight(flight3)
addFlight(flight4)
addFlight(flight5)

function getFlightsByOrigin(city){
  return flightsMapByOrigin.get(city);
}

function getFlightsByDestination(city){
  return flightsMapByDestination.get(city);
}

function getFlights(){
  return allFlights;
}

function getCities(){
  return allCities;
}

export { getCities, getFlights, getFlightsByDestination, getFlightsByOrigin };
