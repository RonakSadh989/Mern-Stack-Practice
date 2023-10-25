const express = require("express");
const app = express();


// for inserting data by json
app.use(express.json())

// For html form
app.use(express.urlencoded({ extended: true }));

// to use the public folder
app.use(express.static("./public"));

// for Routes
app.use("/api", require("./routes/UserRoute"))
app.use("/api", require("./routes/accountRoute"))
app.use("/api", require("./routes/blogRoute"))


app.listen(3000, () => {
  console.log("Listenting to Mongo");
});
