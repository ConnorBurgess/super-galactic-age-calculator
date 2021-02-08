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

initializeIntro();
var clicked = 0;
//Event listeners
$("#go").click(function (event) {
  event.preventDefault();
  var currentUser = new Calculator;
  currentUser.age = (document.getElementById('age').value)
  const dangerousHobby = ["diving", "mountain climbing", "mushroom picking", "sky diving", "motorcycling", "big wave surfing", "hang gliding", "base jumping", "street luge", "banzai skydiving"];
  let pickedHobby = dangerousHobby[Math.floor(Math.random() * 9) + 1];
  let pickedHobbyExpectancy = 30 - (dangerousHobby.indexOf(pickedHobby) * 3);
  console.log(`${document.getElementById('age')}`.value)
  currentUser.lifeExpectancy = currentUser.age + pickedHobbyExpectancy;
  if (clicked === 0) {
    clicked = 1;
    $("#output").hide();
    $("#age, #age-label").hide();
    setTimeout(function () {
      $("#output").text(`I see you are ${currentUser.age} years old.`).fadeIn(1500);
      $("$output").fadeOut(1000);
      console.log(currentUser.age)
    }, 0);
    setTimeout(function () {
      console.log(currentUser.age)
      $("#output").text(`Within 5 years you will become Earth's greatest ${pickedHobby} expert. You will live for about ${pickedHobbyExpectancy} more years.`).fadeIn(1500);
      $("$output").fadeOut(2500);
    }, 2500);
  }
  else if (clicked === 1) {
    console.log(currentUser.age)
    $("#output").text(`Based on your age of ${currentUser.age} and life expectancy of ${currentUser.lifeExpectancy} we can inform you on a few interesting facts...`).fadeIn(1500);
    clicked = 2;
  } else if (clicked === 2) {
    currentUser.mercuryCalc;
    currentUser.yearsCalc();
    currentUser.surpassedExpectancy();
    $("#output").text(`On planet Mercury a ${currentUser.age} year old is ${currentUser.mercuryYears}`).fadeIn(1500);

  }
});
