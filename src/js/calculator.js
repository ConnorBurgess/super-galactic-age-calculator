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

  mercuryCalc() {
    this.mercuryYears = 365 / (365 * 0.24);
    this.mercuryYears = parseFloat(this.mercuryYears.toFixed(2));
    return this.mercuryYears;
  }

  venusCalc() {
    this.venusYears = 365 / (365 * 0.62);
    this.venusYears = parseFloat(this.venusYears.toFixed(2));
    return this.venusYears;
  }
  marsCalc() {
    this.marsYears = 365 / (365 * 1.88);
    this.marsYears = parseFloat(this.marsYears.toFixed(2));
    return this.marsYears;
  }
  jupiterCalc() {
    this.jupiterYears = 365 / (365 * 11.86);
    this.jupiterYears = parseFloat(this.jupiterYears.toFixed(2));
    return this.jupiterYears;
  }
}