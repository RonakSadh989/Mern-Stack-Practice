const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    follower:{
        type: Array,
    },
    following:{
        type: Array,
    }
})
const blogSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    }, 
    username:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    blog:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = {userSchema, blogSchema}