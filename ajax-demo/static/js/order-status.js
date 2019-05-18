"use strict";

function updateStatus(response) {
  console.log(`Result from server: ${response}`);

  const status = response;
  $('#order-status').html(status);

  console.log('Callback function finished');
}

function getStatus() {
  // Our GET request URL will look like this:
  //       /status?order=123
  $.get('/status', { order: 123 }, updateStatus);

  console.log('GET request sent to server');
}

$('#update-status').on('click', getStatus);