export default class Calculator {
  constructor() {
    this.age = 1;
    this.lifeExpectancy = 0;
    this.yearsLeft = 0;
    this.pastExpectancy = 0
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
    this.earthYears = this.age * 365;
    this.activePlanet = "";
    this.surpassExpectancy = 0;
    this.surpassExpectancyStr = "";
  }

  mercuryCalc() {
    this.activePlanet = "Mercury";
    this.mercuryYears = parseFloat((this.earthYears / (365 * 0.24)).toFixed(2));
    return this.mercuryYears;
  }

  venusCalc() {
    this.activePlanet = "Venus";
    this.venusYears = parseFloat((365 / (this.earthYears * 0.62)).toFixed(2));
    return this.venusYears;
  }

  marsCalc() {
    this.activePlanet = "Mars";
    this.marsYears = parseFloat((365 / (this.earthYears * 1.88)).toFixed(2));
    return this.marsYears;
  }

  jupiterCalc() {
    this.activePlanet = "Jupiter";
    this.jupiterYears = parseFloat((this.earthYears / (365 * 11.86)).toFixed(2));
    return this.jupiterYears;
  }

  yearsCalc() {
    return (this.activePlanet === "Mercury" ? this.yearsLeft = parseFloat(((this.lifeExpectancy / 0.24) - this.mercuryYears).toFixed(2), this.surpassExpectancy = this.lifeExpectancy - this.mercuryYears.toFixed(2))
      : this.activePlanet === "Venus" ? this.yearsLeft = parseFloat(((this.lifeExpectancy / 0.62) - this.venusYears).toFixed(2), this.surpassExpectancy = this.lifeExpectancy - this.venusYears.toFixed(2))
        : this.activePlanet === "Mars" ? this.yearsLeft = parseFloat(((this.lifeExpectancy / 1.88) - this.marsYears).toFixed(2), this.surpassExpectancy = this.lifeExpectancy - this.marsYears.toFixed(2))
          : this.activePlanet === "Jupiter" ? this.yearsLeft = parseFloat(((this.lifeExpectancy / 11.86) - this.jupiterYears).toFixed(2), this.surpassExpectancy = this.lifeExpectancy - this.jupiterYears.toFixed(2))
            : this.activePlanet);
  }

  surpassedExpectancy() {
    return (this.surpassExpectancy < 0 ? this.surpassExpectancyStr = `Your age on ${this.activePlanet} exceeds your Earth life expectancy by ${Math.abs(this.surpassExpectancy)} years.`
      : this.surpassExpectancyStr = `You have not yet surpassed your Earth life expectancy on ${this.activePlanet}.`)
  }
}