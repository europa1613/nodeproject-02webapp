var express = require("express");
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get("/", function(req, res){
   /*res.send("Hello from Express Routes!"); */
   res.render('index', 
                {
                    list: ['1st Value', '2nd Value', '3rd Value'],
                    nav: ['Services', 'Portfolio', 'About', 'Team', 'Contact', 'NewThing']
                }
            );
});

app.get("/routing", function(req, res) {
    res.send("Hello! This is Express Routing!");
});

app.listen(port, function(err) {
    if(err) console.log("Error:", err);
    else console.log("The server is running on port:", port);
})