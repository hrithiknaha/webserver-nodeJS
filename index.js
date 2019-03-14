const express = require('express');
const hbs = require("hbs");
const fs = require("fs");

var port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set("view engine", hbs);

app.use(function(req,res,next){
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    console.log(log);
    fs.appendFile('server.log', log + '\n', function(err){
        if(err){
            console.log("Can't be accessed right now.")
        }
    });
    next();
})

//Maintainance Path
// app.use(function(req,res){
//     res.render('maintainance.hbs')
// });                  

app.use(express.static(__dirname + "/public"));

hbs.registerHelper('getCurrentYear', function(){
    return new Date().getFullYear();
})
hbs.registerHelper('screamIt', function(text){
    return text.toUpperCase();
})

app.get("/",function(req,res){
    res.render('homePage.hbs',{
        pageName : 'Home Page',
        name : 'Hrithik Naha'
    })
})


app.listen(port, function(){
    console.log(`Server is listening at port ${port}.`)
})