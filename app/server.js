// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

//EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8082;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTERS
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  