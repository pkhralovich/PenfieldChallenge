//Require external tools
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//Configure environment variables
dotenv.config();

//Create server
const app = express();

//Add external tools to the server
app.use(express.json());
app.use(cors());

//Import available routes
let survey_routes = require("./routes/survey.js");
let sale_routes = require("./routes/sale.js");

//Add routes to the server
const API_PATH = process.env.API_PATH || "";
app.use(API_PATH, survey_routes);
app.use(API_PATH, sale_routes);

//Import database
const db = require('./utilities/database');

//Launch the server
if (!process.env.PORT) throw "Unable to run server. A port must be provided!";

app.listen(process.env.PORT, async () => {
  try {
    await db.authenticate();
    console.log(`Server is running on port ${process.env.PORT}.`);
  }
  catch (error) {
    console.log("Unable to connect to the database: ", error);
  }
});