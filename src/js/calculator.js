export default class Calculator {
  constructor() {
    this.age = 1;
    this.lifeExpectancy = 0;
    this.yearsLeft = 0;
    this.pastExpectancy = ""
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
    this.earthYears = this.age * 365;
    }

    mercuryCalc () {
      this.mercuryYears = 365 / (365 * 0.24);
      this.mercuryYears = parseFloat(this.mercuryYears.toFixed(2));
      return this.mercuryYears;
    }
}