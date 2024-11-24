// Store the path of your current working directory

console.log(__dirname);

// Store the path of your current working file
console.log(__filename);

// This way to add global variables in Node Js and access from anywhere in node js application

global.myVariable = 100;
global.myVariable = 200;

console.log(myVariable);

const path = require("path");
const fs = require("fs");

// Assigning a path to the myPath variable
const myPath = "/NodeJSTut/app.js";

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
};

// Let's See The Results:
console.log(pathInfo);

console.log(path.sep);

const data = "\nBat Man";

fs.writeFile("./index.txt", data, { flag: "a" }, (error) => {
  if (error) {
    return console.log(err);
  } else {
    console.log("Writen to file successfully!");
  }
});

fs.readdir("../nodejs-learning", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory read successfully! Here are the files:");
  files.forEach((file) => console.log(file));
});

fs.rename("./index.txt", "./sample.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File renamed successfully!");
});

fs.unlink("./del.html", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Deleted Successfully!");
});

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const welcomeUser = () => {
  console.log("Hi There, Welcome to the server!");
};

myEmitter.on("userjoined", welcomeUser);

myEmitter.emit("userJoined");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server listening at port 5000");
});
