'use strict';


// /////////////////////////////////////////////////
// ASSESSMENT SOLUTIONS
// /////////////////////////////////////////////////


// Manipulating the DOM

// The goal here is to learn about or use innerText or or innerHTML

  
let signInButton = document.querySelector("#signIn");

signInButton.addEventListener("click", function () {
  if (signInButton.innerText === "Log In") {
    signInButton.innerText = "Log Out";
  } else {
    signInButton.innerText = "Log In";
  }
});



// Preventing Form Submission

// The goal here is to remember the event.preventDefault method.
// A secondary goal is to attach to the form's submit method, rather
// than the button's click method--otherwise, pressing ENTER in the form field
// will submit the form and you won't catch it!

let stalledForm = document.querySelector("#prevent-form-submission-form");

stalledForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  alert("Better luck next time!");
});



// Color Change

// The goal here is to use selectors for ids and classes, apply a JQuery event
// listener, and change the appearance of other elements.


$("#blue").on("click", function () {
  $(".colorChange").css("background-color", "blue");
});


$("#red").on("click", function () {
  $(".colorChange").css("background-color", "red");
});


// Down with Cats!

function swapCat(evt) {
    $("#kittenz-rule").attr('src', 'http://alop.org/wp-content/uploads/2014/12/happy-dog.jpg');
}

$("#kittenz-rule").on('dblclick', swapCat);


// Factorial

$("#calculate").on("click", function () {
  let num = $("#number").val();
  let result = 1;
  while (num) {
    result = result * num;
    num -= 1;
  }
  $("#result").html(result);
});


// AJAX

function getPlanetInfo(){
    $.get("https://swapi.co/api/planets/1/", showResults)
  }

function showResults(results) {
  $('#climate').html(results.climate);
  $('#terrain').html(results.terrain);
  $('#population').html(results.population);
}

// Alternate
// function showResults(results){
//     for (let result in results) {
//       $('#' + result).html(results[result]);
//     }
// }

$("#getInfo").on("click", getPlanetInfo);
