// //UI Logic
import Calculator from './../src/js/calculator.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
let clicked = 0;
$(".jumbotron").fadeIn(2500);
document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/space_sky_spiral_galaxy_99967_1920x1080.jpg')";
$("#output").fadeOut(3500);
$("#space-invaders").hide();
$("#space-invaders").show(2000);
$("#button-go").click(function (event) {
  event.preventDefault();
  if (clicked === 0) {
    $("#loading-screen").hide();
    $("#output").text("This is the Super Galactic Age Calculator...").fadeIn(3000);
    clicked = 1;
  } else if (clicked === 1) {
    $("#output").hide();
    $("#output").text("Do you consider yourself more of a quinoa or burger kinda person?").fadeIn(1000);
    clicked = 2;
  } else if (clicked === 2) {
    $("#output").hide();
 

  }
});
