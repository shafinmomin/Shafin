const express = require("express");
const mongoose = require("mongoose");  // Require mongoose library
//Adding better logging functionality
const morgan = require("morgan");
//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
require("dotenv").config();   // Require the dotenv


const app = express();  //Create new instance


// import the student model schema from another file
let blankModel1 = require('./models/blankModel');



// setting up mongoose DB connection
mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 3000; //Declare the port number

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode

//setup middle ware for routes
app.use('/blankRoutes1', primaryDataRoute);
app.use('/blankRoutes2', eventsDataRoute)

app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });


//error handler
app.use(function (err, req, res, next) {
    // logs error and error code to console
    console.error(err.message, req);
    if (!err.statusCode)
      err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
  