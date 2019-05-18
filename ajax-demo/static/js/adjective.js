"use strict";

function handleGetAdjectives(response) {
  $('#adjective').text(response);
}

$.get('/adjective', handleGetAdjectives);