const http = require("http");

// Function declaration
function reqiestListener(request, response) { // request: IncomingMessage, response: ServerResponse
  console.log(request);
}

const server1 = http.createServer(reqiestListener);


// Anonymous function
const server2 = http.createServer(function(request, response) {
  console.log(request);
});

// Arrow function
const server3 = http.createServer((request, response) => {
  console.log(request);
});

// Listen on port 3000
server3.listen(3000, () => {
  console.log("Server is listening on port 3000");
  console.log("Server is listening on http://localhost:3000");
  console.log("Press Ctrl+C to stop server");
});