import Calculator from './../src/js/calculator.js';


describe('Calculator', () => {
  let currentUser;
  beforeEach(() => {
    currentUser = new Calculator;
  });
  afterEach(() => {
    currentUser.activePlanet = 0;
  });

  test('Should instantiate a Calculator object with properties for age, lifeExpectancy, yearsLeft, pastExpectancy, mercuryYears, venusYears, marsYears, jupiterYears', () => {
    expect(currentUser.age).toEqual(1)
    expect(currentUser.lifeExpectancy).toEqual(0)
    expect(currentUser.yearsLeft).toEqual(0)
    expect(currentUser.pastExpectancy).toEqual(0)
    expect(currentUser.mercuryYears).toEqual(0)
    expect(currentUser.venusYears).toEqual(0)
    expect(currentUser.marsYears).toEqual(0)
    expect(currentUser.jupiterYears).toEqual(0)
    expect(currentUser.earthYears).toEqual(365)
    expect(currentUser.activePlanet).toEqual(0)
    expect(currentUser.surpassExpectancy).toEqual(0)
  });

  test('Should create mercuryCalc method to calculate earthYears to mercuryYears (this.earthYears / (365 * 0.24))', () => {
    currentUser.mercuryCalc();
    expect(currentUser.mercuryYears).toEqual(4.17)
    expect(currentUser.activePlanet).toEqual(1)
  });

  test('Should create venusCalc method to calculate earthYears to venusYears (this.earthYears / (365 * 0.62))', () => {
    currentUser.venusCalc();
    expect(currentUser.venusYears).toEqual(1.61)
    expect(currentUser.activePlanet).toEqual(2)
  });

  test('Should create marsCalc method to calculate earthYears to marsYears (this.earthYears / (365 * 1.88))', () => {
    currentUser.marsCalc();
    expect(currentUser.marsYears).toEqual(0.53)
    expect(currentUser.activePlanet).toEqual(3)
  });

  test('Should create jupiterCalc method to calculate earthYears to jupiterYears (this.earthYears / (365 * 11.86))', () => {
    currentUser.jupiterCalc();
    expect(currentUser.jupiterYears).toEqual(0.08)
    expect(currentUser.activePlanet).toEqual(4)
  });

  test('Should create yearsCalc method to calculate years remaining (Mercury: (100 / 0.24) - mercuryYears)', () => {
    currentUser.lifeExpectancy = 100;
    currentUser.mercuryCalc();
    currentUser.yearsCalc();
    expect(currentUser.surpassExpectancy).toEqual(95.83)
    expect(currentUser.yearsLeft).toEqual(412.5)
  });
  test('Should add to yearsCalc method to calculate years remaining (Venus: (100 / 0.62) - venusYears)', () => {
    currentUser.lifeExpectancy = 100;
    currentUser.venusCalc();
    currentUser.yearsCalc();
    expect(currentUser.surpassExpectancy).toEqual(98.39)
    expect(currentUser.yearsLeft).toEqual(159.68)
  });

  test('Should add to yearsCalc method to calculate years remaining (Mars: (100 / 1.88) - marsYears)', () => {
    currentUser.lifeExpectancy = 100;
    currentUser.marsCalc();
    currentUser.yearsCalc();
    expect(currentUser.surpassExpectancy).toEqual(99.47)
    expect(currentUser.yearsLeft).toEqual(52.66)
  });

  test('Should add to yearsCalc method to calculate years remaining (Jupiter: (100 / 11.86) - jupiterYears)', () => {
    currentUser.lifeExpectancy = 100;
    currentUser.jupiterCalc();
    currentUser.yearsCalc();
    expect(currentUser.surpassExpectancy).toEqual(99.92)
    expect(currentUser.yearsLeft).toEqual(8.35)
  });
  test('Should add to surpassExpectancy method to calculate years number of years lived past life expectancy', () => {
    currentUser.lifeExpectancy = 0.05;
    currentUser.jupiterCalc();
    currentUser.yearsCalc();
    expect(currentUser.surpassExpectancy).toEqual(-0.03)
  });
});