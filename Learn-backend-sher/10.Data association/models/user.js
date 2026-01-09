const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase");

const userSchema = mongoose.Schema({
    username: {
        Type: String       // We also declare type like this
    },
    email: String,
    age: Number,
    posts: [
        {type: mongoose.Schema.Types.ObjectId,     // This will give id type (this is array of id's)
        ref: 'post'
        }
    ]
})

module.exports = mongoose.model('user', userSchema);