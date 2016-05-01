var express = require("express");
var app = express();
var eventRouter = express.Router();


var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/events', eventRouter);

eventRouter.route('/')
.get(function(req, res){
     res.render('events', 
                {
                    list: ['1st Eveent', '2nd Event', '3rd event'],
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

eventRouter.route('/event')
.get(function(req, res){
   res.send('Hello from Single Event!');
});



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