const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");


app.get('/', (req, res) => {
    res.send('Server listen');
})

app.get('/create', async (req, res) => {
    // let user = await userModel.create({
    //     username:"vishal",
    //     age: 22,
    //     email: "vishal@gam.com"
    // });
    // res.send(user)
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello gugu kesi hoo",
        user: "695b89e30a4ca93e1a96581c",
    })

    let user = await userModel.findOne({_id: "695b89e30a4ca93e1a96581c"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
});

app.listen(3000);