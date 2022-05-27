const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body>");
    res.write("<form action='/message' method='POST'>");
    res.write("<input type='text' name='message'>");
    res.write("<button type='submit'>Send</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", `${message}`);
    })
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body>");
  res.write("<h1>Hello from my Node.js server!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log("Listening on Press CTRL+Mouse http://localhost:3000");
  console.log("Press Ctrl+C to quit.");
});