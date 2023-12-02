import divisiveis3e5 from '../src/function.js';

describe("Testes", () => {

  test('Caso sua função receba o inteiro 10, ela deve retornar 23', () => {
    expect(divisiveis3e5(10)).toEqual(23);
  });

  test('Caso sua função receba o inteiro 11, ela deve retornar 33', () => {
    expect(divisiveis3e5(11)).toEqual(33);
  });

  test('Caso sua função receba o inteiro 1, ela deve retornar 0', () => {
    expect(divisiveis3e5(1)).toEqual(0)
  });
})
