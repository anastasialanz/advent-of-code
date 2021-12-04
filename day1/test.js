const fs = require('fs');
const { measurementCount, slidingSum } = require('./index.js');

data = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263
]

test('7 measurements are larger than the previous', () => {
  expect(measurementCount(data)).toBe(7);
});

test('sum of sliding window measurments increases 5 times', () => {
  expect(slidingSum(data)).toBe(5);
});

