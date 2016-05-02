var express = require("express");
var eventRouter = express.Router();

var eventsData = [
                {
                    name: "Event 1",
                    description: "The first Event",
                    date: "05/01/2016",
                    time: "1:00 PM",
                    duration: "1 Hour",
                    capacity:100,
                    location: {
                        streetAddress: '101 Main St',
                        city: 'New York City',
                        state: 'NY',
                        zip:'87885',
                        lon: 0,
                        lat: 0,
                    }
                },
                
                {
                    name: "Event 2",
                    description: "The Second Event",
                    date: "05/02/2016",
                    time: "2:00 PM",
                    duration: "2 Hour",
                    capacity:200,
                    location: {
                        streetAddress: '202 Main St',
                        city: 'New York City',
                        state: 'NY',
                        zip:'87885',
                        lon: 0,
                        lat: 0,
                    }
                },
                
                {
                    name: "Event 3",
                    description: "The third Event",
                    date: "05/03/2016",
                    time: "3:00 PM",
                    duration: "3 Hour",
                    capacity:300,
                    location: {
                        streetAddress: '303 Main St',
                        city: 'New York City',
                        state: 'NY',
                        zip:'87885',
                        lon: 0,
                        lat: 0,
                    }
                },
                
                {
                    name: "Event 4",
                    description: "The fourth Event",
                    date: "05/04/2016",
                    time: "4:00 PM",
                    duration: "4 Hour",
                    capacity:400,
                    location: {
                        streetAddress: '404 Main St',
                        city: 'New York City',
                        state: 'NY',
                        zip:'87885',
                        lon: 0,
                        lat: 0,
                    }
                },
                
                {
                    name: "Event 5",
                    description: "The fifth Event",
                    date: "05/05/2016",
                    time: "5:00 PM",
                    duration: "5 Hour",
                    capacity:500,
                    location: {
                        streetAddress: '505 Main St',
                        city: 'New York City',
                        state: 'NY',
                        zip:'87885',
                        lon: 0,
                        lat: 0,
                    }
                },
    ];

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
                            ],
                        events: eventsData
                    }
        );
    });

eventRouter.route('/:id')
    .get(function(req, res){
        
        var id = req.params.id;
        //res.send("You've come to the Event "+id);
        res.render('event', 
                    {
                        list: ['1st Eveent', '2nd Event', '3rd event'],
                        nav: [
                                {link:'Services', text:'Services'}, 
                                {link:'Portfolio', text:'Portfolio'}, 
                                {link:'About', text:'About'}, 
                                {link:'Team', text:'Team'},
                                {link: 'Contact', text:'Contact'},
                                {link:'Events', text:'Events'}
                            ],
                        event: eventsData[id]
                    }
        );
    });
    

module.exports = eventRouter;