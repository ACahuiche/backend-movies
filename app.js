const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 8030;
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use(morgan("dev"));

//DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db)=>console.log("Database connection success"))
.catch((err) => console.log(`Error: ${err}`));

const loginRoutes = require ('./routes/loginRoutes');

// EndPoints
app.use ('/login', loginRoutes);

app.listen(port, () => {
  console.log(`Movies server running in port ${port}`);
});
