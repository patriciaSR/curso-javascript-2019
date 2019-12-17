const barajasInfo = {
  name: 'Barajas',
  location: 'Madrid',
  capacity: 378923492,
  international: true
}

const pratsInfo = {
  name: 'El Prat',
  location: 'Barcelona',
  capacity: 37492,
  international: true
}

const castellonInfo = {
  name: 'Castellón',
  location: 'Castellón',
  capacity: 378923492,
  international: false
}

let airportsMap = new Map()
  .set('Barajas', barajasInfo)
  .set('El Prat', pratsInfo)
  .set('Castellón', castellonInfo)

//para evitar duplicados de nombres 
function addAerport(airport) {
  airportsMap2.set(airport.name, airport);
}

let airportsMap2 = new Map()
  addAerport(barajasInfo)
  addAerport(pratsInfo)
  addAerport(castellonInfo)

export { airportsMap, airportsMap2 };
