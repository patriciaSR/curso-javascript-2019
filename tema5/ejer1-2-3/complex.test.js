const Complex = require('./complex');

let zero;

// beforeEach(() => {
//   zero = new Complex(0,0);
// });
//Más correcto
beforeAll(() => {
  zero = new Complex(0,0);
});

test('Comprueba que Complex(0,0) tiene la p.real y la p.imaginaria con valor 0', () => {
  //( Given)

  expect(zero.realPart).toBe(0);
  expect(zero.imaginaryPart).toBe(0);

  //other possibles expects
  expect(zero.getImaginaryPart()).toBe(0);
  expect(zero.getRealPart()).toBe(0);
});

test('Comprueba que Complex(0,0) es el valor neutro de la operación add OneAddZero-> Complex(1,1) + Complex(0,0) == Complex(1,1)' , () => {
  const one = new Complex (1,1);

  const result = one.add(zero);

  expect(result).toEqual(one);
});

test('Comprueba que Complex(0,0) es el valor neutro de la operación add ZeroAddOne -> Complex(0,0) + Complex(1,1) == Complex(1,1)', () => {
  //Given
  const one = new Complex (1,1);
  
  //When
  const result =zero.add(one);

  //Then
  expect(result).toEqual(one);
});