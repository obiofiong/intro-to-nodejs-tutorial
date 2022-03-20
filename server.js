const express = require("express");

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
// app.set("views", "./pages");

app.get("/", (req, res) => {
  console.log("home page");
  //   res.sendFile("./pages/index.html", { root: __dirname });
  res.render("index", {
    name: "john",
  });
  //   res.send("<p>Yo man, what is going on?</p>");
});
app.get("/about", (req, res) => {
  res.render("about", {
    hobbies: [
      "playing",
      "singing",
      "dancing",
      "running",
      "running",
      "running",
      "running",
      "reading",
    ],
  });
  //   res.sendFile("./pages/about.html", { root: __dirname });
  //   res.send("<p>Yo man, what is going on?</p>");
});
app.get("/about-us", (req, res) => {
  res.redirect(301, "/about");
  //   res.send("<p>Yo man, what is going on?</p>");
});

app.use((req, res) => {
  //   res.status(404);
  res.status(404).render("index");
  //   res.status(404).sendFile("./pages/404.html", { root: __dirname });
});

app.post("/", (req, res) => {
  console.log(req.body);
});
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// app.get("/about*", function (req, res) {
//   // send content....
// });
// app.get("/about/contact", function (req, res) {
//   // send content....
// });
// app.get("/about/directions", function (req, res) {
//   // send content....
// });
app.listen(4000, (err, res) => {
  console.log("listening on port 4000");
});
