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
  });
  test('Should implement method to calculate earthYears to mercuryYears (this.earthYears / (365 * 0.24))', () => {
    currentUser.mercuryCalc();
    expect(currentUser.mercuryYears).toEqual(4.17)
  });
  test('Should implement method to calculate earthYears to venusYears (this.earthYears / (365 * 0.62))', () => {
    expect(currentUser.venusYears).toEqual(1.61)
  });
});