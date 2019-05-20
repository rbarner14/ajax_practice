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










