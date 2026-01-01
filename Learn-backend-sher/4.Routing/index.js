const express = require('express')
const app = express()
const path = require('path')

// # Setting up parsers for form use in form for data handle on backend
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// # settting us ejs for ejs pages use to render ejs page only find in views folder 
app.set('view engine', 'ejs');

// # Setting up puclic static files use public images and static files
app.use(express.static(path.join(__dirname, 'public')));


// find the route on ejs view folder under index.js page
app.get('/', function(req,  res){
    res.render('index')
})


// # Dyanmic routing start
app.get('/profile/:user_name', function(req, res){
    res.send(`welcome, ${req.params.user_name}`)   
})

app.get('/profile/:user_name/:age', function(req, res){
    res.send(`welcome, ${req.params.user_name} of age ${req.params.age}`)   
})



app.listen(3000, function(){
    console.log("running");
})