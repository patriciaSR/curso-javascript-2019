const Complex = require('./complex');

const mockNumbers = [ 
  [5, 0, 5],
  [-5, 0, 5],
  [-4.5, 0, 4.5],
  [4.5, 0, 4.5],
  [1, 5, 5.0990195135927845],
  [-1, 5, 5.0990195135927845],

]

test.each(mockNumbers)('the method abs()  of Complex(%i, %i) returns %i', (a,b,expected) => {
  const fiveComplex = new Complex(a,b);

  expect(fiveComplex.abs()).toBe(expected);
});