const http = require("http");

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/plain" });
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log("Listening on Press CTRL+Mouse http://localhost:3000");
  console.log("Press Ctrl+C to quit.");
});