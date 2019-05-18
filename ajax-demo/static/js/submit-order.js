"use strict";

function sendAlert(alertMsg) {
  alert(alertMsg);
}

function handleOrderSubmit(evt) {
  evt.preventDefault();

  const formInputs = {
    'type': $('#type-field').val(),
    'amount': $('#amount-field').val()
  };

  console.log('POST /new-order');
  $.post('/new-order', formInputs, sendAlert);
}

$('#order-form').on('submit', handleOrderSubmit);