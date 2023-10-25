const mongoose = require("mongoose")
const {userSchema, blogSchema} = require("../Schema/userSchema")
// const uri = "mongodb+srv://pk6669018:Rk9899210087@cluster0.xnkznc8.mongodb.net/myDatabase?retryWrites=true&w=majority"
 const uri = "mongodb://127.0.0.1:27017/myDatabase";
mongoose.connect(uri)
const User = mongoose.model("users", userSchema)
const Blog = mongoose.model("blogs", blogSchema)

module.exports = {User, Blog}