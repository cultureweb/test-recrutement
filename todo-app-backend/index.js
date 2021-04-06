const express = require("express");
const app = express();
const cors = require("cors");
const xss = require("xss-clean");
const compression = require("compression");
const port = 1337;

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
