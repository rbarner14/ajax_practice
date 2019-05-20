"use strict";

// Manipulating the DOM

let signInButton = document.querySelector("#signIn");

signInButton.addEventListener("click", function (){
    if(signInButton.innerText === "Log In"){
      signInButton.innerText = "Log Out";
    } else {
      signInButton.innerText = "Log In";
    }
});

// Preventing Form Submission

// Attach to the form's submit method, rather than the button's click method--
// otherwise, pressing ENTER in the form field will still enable submission
// without JS.

let ourForm = document.querySelector("#prevent-form-submission-form")

ourForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    alert("You're going to win, Ryan.  Stay ten toes down.  Remember who you are and who He is!")
});


// Color Change

// Use selectors for ids and classes, apply a JQuery event listener, and change 
// the appearance of other elements.

let redButton = document.querySelector("#red");
let blueButton = document.querySelector("#blue");

$(redButton).on("click", function(){
    $(".colorChange").css("background-color", "red");
});

$(blueButton).on("click", function(){
    $(".colorChange").css("background-color", "blue");
})


// Can also do

// $("#red").on("click", function(){
//     $(".colorChange").css("background-color", "red")
// });

// $("#blue").on("click", function(){
//     $(".colorChange").css("background-color", "blue")
// });


function swapCat(evt){

    $("#kittenz-rule").attr("src",
        "https://www.britishairways.com/assets/images/destinations/components/pathfinderBodyCopy/new-york/flights-to-new-york/683840433_642x856.jpg"
        )
}

$("#kittenz-rule").on("dblclick", swapCat)

// Write a function that calculates the factorial of a positive number
// Add an event listener that catches when someone clicks on the 'calculate' 
// button and:
// <ul>
//   <li> gets whatever number is inside the 'number' input field</li>
//   <li>calls your function that calculates a factorial</li>
//   <li>puts the result of the function inside the 'result' span</li>

function calculateFactorial(num){
    let i = num;
    var factorial = 1;

    while(i > 0){
        i *= factorial
        i -= 1
    }  

    return factorial;
}

$("#calculate").on("click", function(){
    let num = $("#number").val()
    let factorial = 1;
    let i = num;

    while(i > 0){
        factorial *= i;
        i -= 1;
    }

    $("#result").html(factorial);
});



function showPlanetInfo(response){
    $("#climate").html(response.climate);
    $("#terrain").html(response.terrain);
    $("#population").html(response.population);
}

function getPlanetInfo(){
    var url = 'https://swapi.co/api/planets/1/';
    $.get(url, showPlanetInfo)
}

$("#getInfo").on("click", getPlanetInfo);

// Or can do it as:
// function getPlanetInfo(){
//     $.get("https://swapi.co/api/planets/1/", showResults)
//   }

// function showResults(results) {
//   $('#climate').html(results.climate);
//   $('#terrain').html(results.terrain);
//   $('#population').html(results.population);
// }

// // Alternate
// // function showResults(results){
// //     for (let result in results) {
// //       $('#' + result).html(results[result]);
// //     }
// // }

// $("#getInfo").on("click", getPlanetInfo);






