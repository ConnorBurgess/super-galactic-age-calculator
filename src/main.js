// //UI Logic
import Calculator from './../src/js/calculator.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

let initializeIntro = () => {
  document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/space_sky_spiral_galaxy_99967_1920x1080.jpg')";
  $(".jumbotron").fadeIn(2500);
  setTimeout(function () {
    $("#intro1").fadeIn(1500);
    $("#intro1").fadeOut(1000);
  }, 0);
  setTimeout(function () {
    $("#intro2").fadeIn(1500);
    $("#intro2").fadeOut(1000);
  }, 2500);
  setTimeout(function () {
    $("#intro3").fadeIn(2500);
    $("#intro3").fadeOut(1000);
  }, 5000);
  setTimeout(function () {
    $("#intro4").fadeIn(2500);
    $("#submit-form").show(2800)
  }, 8500);
}
//Initialize global Vars and intro function call
initializeIntro();
var clicked = 0;
var currentUser = new Calculator;

$("#go").click(function (event) {
  event.preventDefault();
  if (clicked === 0 && parseInt((document.getElementById('age').value)) > 0) {
    currentUser.age = parseInt((document.getElementById('age').value))
    const dangerousHobby = ["diving", "mountain climbing", "mushroom picking", "sky diving", "motorcycling", "big wave surfing", "hang gliding", "base jumping", "street luge", "banzai skydiving"];
    let pickedHobby = dangerousHobby[Math.floor(Math.random() * 9) + 1];
    let pickedHobbyExpectancy = 30 - (dangerousHobby.indexOf(pickedHobby) * 3);
    currentUser.earthYears = currentUser.age * 365;
    currentUser.lifeExpectancy = currentUser.age + pickedHobbyExpectancy;
    clicked = 1;
    $("#output").hide();
    $("#age, #age-label").hide();
    setTimeout(function () {
      $("#output").text(`In one year you will become Earth's greatest ${pickedHobby} expert. Life expectancy: ${pickedHobbyExpectancy} more years.`).fadeIn(1500);
    }, 0);
  }
  else if (clicked === 1) {
    $("#output").text(`Based on your age of ${currentUser.age} and life expectancy of ${currentUser.lifeExpectancy} we can inform you of a few interesting facts...`).fadeIn(1500);
    clicked = 2;
  } else if (clicked === 2) {
    currentUser.mercuryCalc();
    currentUser.yearsCalc();
    currentUser.surpassedExpectancy();
    clicked = 3;
    $("#output").text(`On planet ${currentUser.activePlanet} a ${currentUser.age} year old is ${currentUser.mercuryYears}. Based on your life expectancy you can live ${currentUser.yearsCalc()} more years on this tiny moonless planet.`).fadeIn(1500);
  } else if (clicked === 3) {
    $("#output").text(currentUser.surpassExpectancyStr).fadeIn(1500);
    clicked = 4;
  } else if (clicked === 4) {
    currentUser.venusCalc();
    currentUser.yearsCalc();
    currentUser.surpassedExpectancy();
    clicked = 5;
    console.log(currentUser.yearsCalc())
    $("#output").text(`On ${currentUser.activePlanet}, also known as the "Prehistoric planet" a ${currentUser.age} year old is ${currentUser.venusYears}. You can live ${currentUser.yearsCalc()} more years on ${currentUser.activePlanet}`).fadeIn(1500);
  } else if (clicked === 5) {
    console.log(currentUser.yearsCalc())
    $("#output").text(currentUser.surpassExpectancyStr).fadeIn(1500);
    clicked = 6;
  } else if (clicked === 6) {
    currentUser.marsCalc();
    currentUser.yearsCalc();
    currentUser.surpassedExpectancy();
    clicked = 7;
    $("#output").text(`Considering a vacation to ${currentUser.activePlanet}, Quaid? On this planet a ${currentUser.age} year old is ${currentUser.marsYears}. You can live ${currentUser.yearsCalc()} more years on ${currentUser.activePlanet}.`).fadeIn(1500);
  } else if (clicked === 7) {
    $("#output").text(currentUser.surpassExpectancyStr).fadeIn(1500);
    clicked = 8;
  } else if (clicked === 8) {
    currentUser.jupiterCalc();
    currentUser.yearsCalc();
    currentUser.surpassedExpectancy();
    clicked = 9;
    $("#output").text(`Ascend to ${currentUser.activePlanet}! On this planet a ${currentUser.age} year old is ${currentUser.jupiterYears}. You can live ${currentUser.yearsCalc()} more years on ${currentUser.activePlanet}.`).fadeIn(1500);
  } else if (clicked === 9) {
    $("#output").text(currentUser.surpassExpectancyStr).fadeIn(1500);
    clicked = 10;
  } else if (clicked === 10) {
    $("#output").text(`...and that is all for now!`).fadeIn(1500);
    clicked = 11;
  } else if (clicked === 11) {
    window.location.reload()
  }
});
