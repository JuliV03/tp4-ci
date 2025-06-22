// tests/math.test.js
const { suma, resta, multiplica } = require('../src/math');

describe('Operaciones básicas', () => {

  test('suma: 2 + 3 = 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

  test('suma con cero no altera: 0 + 7 = 7', () => {
    expect(suma(0, 7)).toBe(7);
  });

  test('sumar negativos: -1 + -4 = -5', () => {
    expect(suma(-1, -4)).toBe(-5);
  });

  // Ahora resta
  test('resta: 5 - 2 = 3', () => {
    expect(resta(5, 2)).toBe(3);
  });

  test('resta con cero: 5 - 0 = 5', () => {
    expect(resta(5, 0)).toBe(5);
  });

  test('resta negativa: 2 - 5 = -3', () => {
    expect(resta(2, 5)).toBe(-3);
  });

  // Multiplicación
  test('multiplica: 3 * 4 = 12', () => {
    expect(multiplica(3, 4)).toBe(12);
  });

  test('multiplica por cero: 7 * 0 = 0', () => {
    expect(multiplica(7, 0)).toBe(0);
  });

  test('multiplica negativos: -2 * 3 = -6', () => {
    expect(multiplica(-2, 3)).toBe(-6);
  });

});

