const express = require("express");
// const dotenv = require("dotenv")
const app = express();
const cors = require("cors")
// const jwtoken = require("jsonwebtoken")

// dotenv
// dotenv.config({path:"./config.env"})
const Port  = process.env.PORT || 5000
// Use cors middleware
app.use(cors());

// for inserting data by json
app.use(express.json())

// For html form
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World. Welcome to the blog mern app API!")
})
// to use the public folder
app.use(express.static("./client/public"));

// for Routes
app.use("/api", require("./routes/UserRoute"))
app.use("/api", require("./routes/accountRoute"))
app.use("/api", require("./routes/blogRoute"))

// heroku
// if(process.env.NODE_ENV == "production"){
//   app.use(express.static("client/bulid"))
//   const path = require("path")
//   app.get("*",(req, res)=>{
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   } )
// }


app.listen(Port, () => {
  console.log("Listenting to Mongo on Port: ", Port);
});
