"use strict";

function updateStatus(response) {
  console.log(`Result from server: ${response}`);

  const status = response;
  // Can be .text(status) as well; .html() is not available in XML documents 
  // whereas .text() can be used in both XML & HTML documents
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