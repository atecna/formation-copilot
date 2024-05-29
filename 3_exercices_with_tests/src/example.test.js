const returnTrue = require('./example.js');

test('returnTrue should return true', () => {
  expect(returnTrue()).toBe(true);
});