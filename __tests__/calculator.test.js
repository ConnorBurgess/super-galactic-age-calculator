import Calculator from './../src/js/calculator.js';


describe('Calculator', () => {
  let currentUser;
  beforeEach(() => {
    currentUser = new Calculator;

  });

  test('Should instantiate a Calculator object with properties for age, lifeExpectancy, yearsLeft, pastExpectancy, mercuryYears, venusYears, marsYears, jupiterYears', () => {
    expect(currentUser.age).toEqual(1)
    expect(currentUser.lifeExpectancy).toEqual(0)
    expect(currentUser.yearsLeft).toEqual(0)
    expect(currentUser.pastExpectancy).toEqual("")
    expect(currentUser.mercuryYears).toEqual(0)
    expect(currentUser.venusYears).toEqual(0)
    expect(currentUser.marsYears).toEqual(0)
    expect(currentUser.jupiterYears).toEqual(0)
    expect(currentUser.earthYears).toEqual(365)  
    expect(currentUser.activePlanet).toEqual(0)
  });

  test('Should create mercuryCalc method to calculate earthYears to mercuryYears (this.earthYears / (365 * 0.24))', () => {
    currentUser.mercuryCalc();
    expect(currentUser.mercuryYears).toEqual(4.17)
  });

  test('Should create venusCalc method to calculate earthYears to venusYears (this.earthYears / (365 * 0.62))', () => {
    currentUser.venusCalc();
    expect(currentUser.venusYears).toEqual(1.61)
  });
  test('Should create marsCalc method to calculate earthYears to marsYears (this.earthYears / (365 * 1.88))', () => {
    currentUser.marsCalc();
    expect(currentUser.marsYears).toEqual(0.53)
  });
  test('Should create jupiterCalc method to calculate earthYears to jupiterYears (this.earthYears / (365 * 11.86))', () => {
    currentUser.jupiterCalc();
    expect(currentUser.jupiterYears).toEqual(0.08)
  });

  test('Should create yearsCalc method to calculate years remaining on each planet (Mercury ex: (100 * 0.24) - mercuryYears)', () => {
    currentUser.lifeExpectancy = 100;
    currentUser.mercuryCalc();
    currentUser.yearsCalc();
    expect(currentUser.yearsLeft).toEqual(412.5)
  });
});