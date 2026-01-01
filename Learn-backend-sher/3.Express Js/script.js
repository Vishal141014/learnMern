// Express.js Framework:
//Introduction to Express.js.
    // express is a npm package

    // framework -> flow deta hai kaam karene ke liye like tell kese kaam karna hai pura flow

    //package -> tools deta hai jisme hum tools se kese bhi kuch bhi bana sakte hai bina kisi flow ke hum jese bhi bana sakte hai

    //** expressJs manages everything form receving the request and giving the response

// Setting up a basic Express application
    // const express = require('express')
    // const app = express()

    // // routes create

    // // app.get(routeName, reuestHandler)
    // //reuestHandler is a middleware

    // app.get('/', function(req, res){
    //     res.send('Hello world')
    // })

    // app.listen(3000)

// Middleware
    // webPage----------->middleware-------->routes------>response

    // kisi bhi route ko chalne ke phle hum kuch or bhi print karwa sate hai
    // jab bhi server request accept karta hai wha se route tak poche ke phele beech mai hum kuch or chiz perfom karte ho, too ye element middleware kehlaata hai

    // example code use app.use() jitnii bhi reuest ayngi iss server par woo phle app.use() se ho kar jayegi

    const express = require('express')
    const app = express()

    app.use(function(req, res, next){
        console.log("Ye middleware hai");
        next();
    })

     app.use(function(req, res, next){
        console.log("Ye middleware hai ek or baar chla");
        next();
    })

    app.get('/', function(req, res){
        res.send("chapmpion");
    })

    // for error i will creating this route
    app.get('/profile', function(req, res, next){
        // yaha par return ayega taki code eroor ke padd yahi ruk jaye
        return next(new Error('somenting went worng'))
    })

    app.listen(3000)

// Error Handling
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send("Something is wrong!")
})