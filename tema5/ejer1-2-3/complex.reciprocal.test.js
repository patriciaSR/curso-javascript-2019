const Complex = require('./complex');

test('it throw an err when reciprocal() of Complex(0,0)', () => {
  const zero = new Complex(0,0);

  expect(() => {
    zero.reciprocal();
  }).toThrowError('division by zero');
})