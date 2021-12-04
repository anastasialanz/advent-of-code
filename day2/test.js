const fs = require('fs');
const submarineNavigation = require('./index.js');

const testData = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2'
];

test('horizontal position times depth should equal 150', () => {
  expect(submarineNavigation(testData)).toBe(150);
});