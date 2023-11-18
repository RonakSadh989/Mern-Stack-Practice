const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { userSchema, blogSchema } = require("../Schema/userSchema");
// const uri = "mongodb+srv://pk6669018:Rk9899210087@cluster0.xnkznc8.mongodb.net/myDatabase?retryWrites=true&w=majority"
dotenv.config({ path: "../config.env" });
const uri = "mongodb://127.0.0.1:27017/myDatabase";
const uri1 = process.env.DATABASE;
mongoose.connect(uri).then(()=>{console.log("connection done")})
.catch((err)=>{console.log("Error in connection", err)});
const User = mongoose.model("users", userSchema);
const Blog = mongoose.model("blogs", blogSchema);

module.exports = { User, Blog };
