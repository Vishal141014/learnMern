const express = require('express');
const app = express();
const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send("Hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Vishal",
        email: "vishal@vishal.com",
        username: "vishal14"
    },{
        name: "Nikita",
        email: "Nikita@vishal.com",
        username: "vishalNikita14"
    })

    res.send(createduser)
})

// findOneAndUpdate(findone,update, {new: true}) new true means give updated user as result
app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "vishal14"}, {username: "Nikitachumi14"}, {new: true})

    res.send(updateduser)
})

app.get('/read', async (req, res) => {
    let users = await userModel.find(); // use for find all users
    // let user = await userModel.findOne({username: "vishalNikita14"}) // use for find one user
    res.send(users)
    // res.send(user)
})

app.get('/delete', async (req, res) => {
    let user = await userModel.findOneAndDelete({username: "vishalNikita14"})

    res.send(user)
})


app.listen(3000)