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

  const ms1 = `
  .::       .:: .::     .::    .:::::::         .::::        .:: ::   .:::::::: .:::::::     .::         .:: .::     .::    .::::::::               
  .: .::   .::: .::  .::   .:: .::    .::     .::    .::   .::    .:: .::       .::    .::    .::       .::  .::  .::   .:: .::                .::  
  .:: .:: . .:: .:: .::        .::    .::   .::        .::  .::       .::       .::    .::     .::     .::   .:: .::        .::                 .:: 
  .::  .::  .:: .:: .::        .: .::       .::        .::    .::     .::::::   .: .::          .::   .::    .:: .::        .::::::    .:::::   .:: 
  .::   .:  .:: .:: .::        .::  .::     .::        .::       .::  .::       .::  .::         .:: .::     .:: .::        .::                 .:: 
  .::       .:: .::  .::   .:: .::    .::     .::     .::  .::    .:: .::       .::    .::        .::::      .::  .::   .:: .::                 .:: 
  .::       .:: .::    .::::   .::      .::     .::::        .:: ::   .:::::::: .::      .::       .::       .::    .::::   .::::::::          .::::
                                                                                                                                                        `;
  const e404 = `
                                      
  .:::::::: .:::::::     .:::::::         .::::      .:::::::                                                  
  .::       .::    .::   .::    .::     .::    .::   .::    .::                .::        .::            .::   
  .::       .::    .::   .::    .::   .::        .:: .::    .::              . .::      .::  .::       . .::   
  .::::::   .: .::       .: .::       .::        .:: .: .::       .:::::    .: .::    .::     .::     .: .::   
  .::       .::  .::     .::  .::     .::        .:: .::  .::             .::  .::    .::      .::  .::  .::   
  .::       .::    .::   .::    .::     .::     .::  .::    .::          .:::: .: .::  .::    .::  .:::: .: .::
  .:::::::: .::      .:: .::      .::     .::::      .::      .::              .::       .:::            .::   
                                                                                                                 `;

  if (url.split('/')[1] === "react") {
    if (url.split('/')[2] === "ui") {
      const ui = fs.readFileSync(dir+index);
      console.log("stats for index.js is: ",fs.statSync(dir+index));
      res.writeHead(200);
      return res.end(ui);  
    }
    res.writeHead(200);
    return res.end(ms1);
  }

  if (url === '' || url === '/'){
    res.writeHead(200);
    return res.end("Landing page");
  }

  res.writeHead(200);
  return res.end(e404);

});

server.listen(port);
