const express = require("express");
const { errors } = require("celebrate");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://allcantara-bethehero.herokuapp.com/",
  })
);
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
