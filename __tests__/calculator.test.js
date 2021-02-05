import Calculator from './../src/js/calculator.js';


describe('Calculator', () => {

  test('Should instantiate a Calculator object with properties for age, lifeExpectancy, yearsLeft, pastExpectancy, mercuryYears, venusYears, marsYears, jupiterYears', () => {
    let currentUser = new Calculator;
    expect(currentUser.age).toEqual(0)
    expect(currentUser.lifeExpectancy).toEqual(0)
    expect(currentUser.yearsLeft).toEqual(0)
    expect(currentUser.pastExpectancy).toEqual("")
    expect(currentUser.mercuryYears).toEqual(0)
    expect(currentUser.venusYears).toEqual(0)
    expect(currentUser.marsYears).toEqual(0)
    expect(currentUser.jupiterYears).toEqual(0)
  });

});