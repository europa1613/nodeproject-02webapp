var express = require("express");
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get("/", function(req, res){
   res.send("Hello from Express Routes!"); 
});

app.get("/routing", function(req, res) {
    res.send("Hello! This is Express Routing!");
});

app.listen(port, function(err) {
    if(err) console.log("Error:", err);
    else console.log("The server is running on port:", port);
})