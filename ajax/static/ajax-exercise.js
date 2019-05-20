"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(response){
    $("#fortune-text").text(response);
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function replaceWeather(response){

    $("#weather-info").html(response.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, replaceWeather);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showMelonMessage(response){
    if(response.code !== "ERROR"){
        $("#order-status").html(response.msg)
    } else {
        $("#order-status").addClass("order-error");
        $("#order-status").html(response.msg)
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let url = "/order-melons.json";
    let formData = $("#order-form").serialize()

    $.post("/order-melons.json", formData, showMelonMessage);
}

$("#order-form").on('submit', orderMelons);


