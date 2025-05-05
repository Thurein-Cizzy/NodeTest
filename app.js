const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("this is me cizzy");
    res.end();
  }
});

server.listen(5000);
