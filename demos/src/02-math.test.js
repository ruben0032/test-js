const { sum, mult, divi } = require('./02-math');

test('1 + 3 shoult be 4', () => {
  const response = sum(1, 3);
  expect(response).toBe(4);
});

test('2 * 4 shoult be 8', () => {
  const response = mult(2, 4);
  expect(response).toBe(8);
});

test('6 / 3 and 6 / 0 shoult be 2 and null', () => {
  const response = divi(6, 3);
  expect(response).toBe(2);
  const response2 = divi(6, 0);
  expect(response2).toBeNull();
});
