const fs = require("fs");
const http = require("http");
const path = require("path");
const fetch = require("node-fetch");
const port = 3030;

const deployFolder = "public";
const cwd = process.cwd();
const dir = path.join(cwd, deployFolder);
const index = "/index.html";

const server = http.createServer(function (req, res) {
  let url = req.url;

  // if (url === '/logger') {
  //   console.log('log added @', new Date());
  //   res.writeHead(200);
  //   return res.end("Unextpected shit occoured");
  // }

  console.log(21, url, req.url);
  if (url === "/react") {
    console.log(23, url, req.url);
    url = index;
  }
  console.log(26, url, req.url);
  fs.readFile(dir + url, function (err, data) {
    if (err) {
      console.log(1, "Logging Unsuccesful @", url, req.url, new Date());
      console.log(2, "Error and data is", err, data, new Date());
      res.writeHead(200);
      return res.end("Unextpected shit occoured");
    }
    console.log(34, dir+url, data);
    res.writeHead(200);
    return res.end(data);
  });
});

server.listen(port);
