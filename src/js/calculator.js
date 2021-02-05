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
    this.activePlanet = 0;
  }

  mercuryCalc() {
    this.activePlanet = 1;
    this.mercuryYears = parseFloat((365 / (365 * 0.24)).toFixed(2));
    return this.mercuryYears;
  }

  venusCalc() {
    this.activePlanet = 2;
    this.venusYears = parseFloat((365 / (365 * 0.62)).toFixed(2));
    return this.venusYears;
  }
  marsCalc() {
    this.activePlanet = 3;
    this.marsYears = parseFloat((365 / (365 * 1.88)).toFixed(2));
    return this.marsYears;
  }
  jupiterCalc() {
    this.activePlanet = 4;
    this.jupiterYears = parseFloat((365 / (365 * 11.86)).toFixed(2));
    return this.jupiterYears;
  }
  yearsCalc() {
    console.log(this.activePlanet)
    return (this.activePlanet === 1 ? this.yearsLeft = parseFloat(((this.lifeExpectancy / 0.24) - this.mercuryYears).toFixed(2))
      : this.activePlanet === 2 ? this.yearsLeft = parseFloat(((this.lifeExpectancy / 0.62) - this.venusYears).toFixed(2))
        : this.activePlanet);
  }

}