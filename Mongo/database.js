const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const uri = "mongodb://127.0.0.1:27017/myDatabase";
const uri = "mongodb+srv://pk6669018:Rk9899210087@cluster0.xnkznc8.mongodb.net/myDatabase?retryWrites=true&w=majority";
// to connect to db
mongoose.connect(uri);
const Schema = new mongoose.Schema({
  name: String,
  pass: String,
});

const mongoModel = mongoose.model("users", Schema);
// for inserting data by json
app.use(express.json())


// For html form
app.use(express.urlencoded({ extended: true }));

// to use the public folder
app.use(express.static("./public"));
app.get("/users", async (req, res) => {
  try {
    let users = await mongoModel.find();
    res.status(200).send(users);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.post("/users", async (req, res) => {
  try {
    let { name, pass } = req.body;
    let newUser = new mongoModel({ name, pass });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.send(err).status(500);
  }
});
app.put("/users/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { name, pass } = req.body;
    let update = await mongoModel.findByIdAndUpdate(id, {
      $set: { name: name, pass: pass },
    });
    res.send(update).status(202);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deleted = await mongoModel.findByIdAndDelete(id);
    res.send(deleted).status(204);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.listen(3000, () => {
  console.log("Listenting to Mongo");
});
