// const mul = require("./multiply");

const fs = require("fs");

// const test = "I am learning file system today";
// fs.writeFileSync("test.txt", test, (err) => {
//   console.log(err);
// });
// console.log("after writing");
// fs.readFile("test.txt", (err, data) => {
//   console.log(data.toString());
// });

// const homePage = require("../pages/index.html");

const http = require("http");

const app = http.createServer((req, res) => {
  console.log(req.url);
  pathname = "./pages/";
  if (req.url === "/") {
    pathname += "index.html";
  } else if (req.url === "/about") {
    pathname += "about.html";
  } else {
    pathname += "404.html";
  }
  console.log(pathname);
  res.setHeader("Content-Type", "text/html");
  fs.readFile(pathname, (err, data) => {
    if (err) console.log(err);
    console.log(data.toString());
    res.write(data.toString());
    res.end();
  });
  // res.write(homePage);
  // res.end();
});

app.listen(4000, "localhost", () => {
  console.log("Listening on port ", 4000);
});
