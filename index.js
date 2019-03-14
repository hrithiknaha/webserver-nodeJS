const express = require('express');
const hbs = require("hbs");


var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set("view engine", hbs);
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


app.listen(3000, function(){
    console.log("Server is listening at port 3000.")
})