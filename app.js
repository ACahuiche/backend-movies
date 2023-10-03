const express = require("express");
const morgan = require("morgan");
const mongoosedb = require("./config/mongodbconnection");
const bodyParser = require("body-parser");
const port = 8030;
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use(morgan("dev"));

const loginRoutes = require ('./routes/loginRoutes');

// EndPoints
app.use ('/login', loginRoutes);

app.listen(port, () => {
  console.log(`Movies server running in port ${port}`);
});
