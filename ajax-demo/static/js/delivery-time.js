"use strict";

function showDeliveryInfo(response) {
  // Remember, you can use console.dir to debug!
  console.dir(response);
  console.log('this is in `response`:');
  console.log(response);

  // Display response from the server
  alert(`This will cost $${response.cost}`);
  alert(`This will arrive in ${response.days} day(s)`);
}

function handleDeliverySubmit(evt) {
  evt.preventDefault();

  // Get user input from a form
  const formData = {
    city: $('#city-field').val(),
    address: $('#adr-field').val()
  };

  console.log('GET /deliver-info.json');

  // Send formData to the server (becomes a query string)
  $.get('/delivery-info.json', formData, showDeliveryInfo);
}

$('#delivery-form').on('submit', handleDeliverySubmit);