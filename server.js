const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controller/controller.js");

//??
let PORT = process.env.PORT || 8080;

let app = express();

//allows us to serve static files like images, css and js
app.use(express.static("public"));

// allows us to parse request data?
app.use(express.urlencoded( { extended : true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

//allows us to use the controller.js with our routes
app.use(routes);

app.listen(PORT, function(){
    if(err)throw err;
    console.log("Server listening on http://localhost:" + PORT);
})