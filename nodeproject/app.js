var express = require("express");
var app = express();

var port = process.env.PORT;

var eventRouter = require("./src/routes/eventRoutes");

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/events', express.static(__dirname+'/public'));
app.use('/events', express.static(__dirname+'/bower_components'));
app.use('/events', eventRouter);

app.get("/", function(req, res){
   /*res.send("Hello from Express Routes!"); */
   res.render('index', 
                {
                    list: ['1st Value', '2nd Value', '3rd Value'],
                    nav: [
                            {link:'Services', text:'Services'}, 
                            {link:'Portfolio', text:'Portfolio'}, 
                            {link:'About', text:'About'}, 
                            {link:'Team', text:'Team'},
                            {link: 'Contact', text:'Contact'},
                            {link:'Events', text:'Events'}
                        ]
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