// for cookie need this package
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser())

// _______________________________________________________________

// Cookie setting (cookie kaise set karte hai and read karte hai)
// cookie set use -> res use and Cooki read use req 
// app.get('/', function(req, res){
//     res.cookie("name", "vishal");
//     res.send("done");
// });

// app.get('/read', function(req, res){
//     console.log(req.cookies);
//     res.send("read page");
// });



// ____________________________________________________________

// bcrypt kaise use karte hai for password encrytption and decyption( Encryption ->
// bcrypt.genSalt(saltRounds, function(err, salt){
//         bcrypt.hash(myPlaintextPassword, salt, function(err, hash){
//             // Store hash in your password DB.
//         });
//     });
// )

// Encryption
// app.get('/', function(req, res){
//     bcrypt.genSalt(10, function(err, salt){
//         bcrypt.hash('myPassword', salt, function(err, hash){
//             console.log(hash); // ouput like $2b$10$2TMc/7qUkCwAOrMzbkj2YutmgHe57zVAq7gno1LsM166ktrGTB5ka
//         });
//     });
// });

// compare out string and our password (dycryption);
// bcrypt.compare("plainTextPassword", "Gen_hash", function(err, result))
// app.get('/com', function(req, res){
//     bcrypt.compare("myPassword", "$2b$10$2TMc/7qUkCwAOrMzbkj2YutmgHe57zVAq7gno1LsM166ktrGTB5ka", function(err, result){
//         console.log(result);
//     });
// });

// _______________________________________________________________



// JWT kya hai and jwt mai kaise store karein and baahar nikaalein

// setting cookie token sending to backend 
app.get("/", function(req, res){
    let token = jwt.sign({email: "vishal@example.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
})

// check the token
// app.get("/read", function(req, res){
//     console.log(req.cookies.token);
// })

// read or verify the toekn
app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})


app.listen(3000);