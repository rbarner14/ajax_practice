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
  // { order: 123 } is the payload to populate as query string
  $.get('/status', { order: 123 }, updateStatus);

  console.log('GET request sent to server');
}

$('#update-status').on('click', getStatus);

// - Script is run in html
//     - <script src="/static/js/order-status.js"></script>
// - In /static/js/order-status.js, the jQuery method is called:
//     - $('#update-status').on('click', getStatus); 
//         - At the event of a click ("...).on('click'...") of the element at the 
//         id update-status in the html (#update-status), run the callback function
//         getStatus
//     - getStatus gets the url at '/status' (defined in server), and attached the 
//     payload ({ order: 123 }) which makes the query string /status?=order123
//     - at the route '/status':
//         - print the url from the request on a new line: 
//             print(f"\n\nRequest: GET {request.url}\n\n")
//         - bind the value at order in the query string to variable order_number
//             order_number = request.args.get("order")
//         - run conditional statements
//             - if order_number is "123"
//                 if order_number == "123":
//             - return a value selected at random from the values in the array 
//             passed into the method random.choice()
//                 - return random.choice(["LATE",
//                             "SUPER-LATE",
//                             "NEVER COMING"])
//             - otherwise, return another message
//                 - else:
//                     return "ON-TIME"
//         - the return from this function is the response that is passed into the 
//         callback function that is ran
//             - updateStatus in $.get('/status', { order: 123 }, updateStatus);
//         - the response is bound to the variable status
//             -  const status = response;
//         - status is converted to a format readable by html 
//             - ).html(status)
//         - status is bound to element id order-status in html and it is rendered
//         in the client view
//             - $('#order-status').html(status);


