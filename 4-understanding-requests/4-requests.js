const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log("Listening on Press CTRL+Mouse http://localhost:3000");
  console.log("Press Ctrl+C to quit.");
});