// describe reune un conjunto de bruebas, mejora la lectura del código y la encapsulación.
describe('conjuto 1', () => {
  beforeAll(() => { // Se ejecuta primero en su Scope
    console.log('beforeAll');
  });

  afterAll(() => { // Se ejecuta ultimo en su Scope
    console.log('afterAll');
  });

  test('case 1-1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case 1-2', () => {
    expect(2 + 2).toBe(4);
  });

  describe('conjunto 2', () => {
    beforeEach(() => { // Se ejecuta primero antes que cualquier test en el Scope
      console.log('before each');
    });

    afterEach(() => { // Se ejecuta primero antes que cualquier test en el Scope
      console.log('after each');
    });

    test('case 2-1', () => {
      expect(1 + 1).toBe(2);
    });

    test('case 2-2', () => {
      expect(2 + 2).toBe(4);
    });
  });
});
