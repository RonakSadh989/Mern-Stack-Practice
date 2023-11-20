const express = require('express');
const bcrypt = require("bcryptjs")
const { User } = require('../models/db');
const router = express.Router()

//find all users
router.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.send(err).status(500);
  }
});
// login user
router.get("/login", async (req, res) => {
  try {
     let {username, password} = req.body
     if(!username || !password){
      res.send(400).json({message:"Username and password are required"})
    }
    let encryptedPassword = await bcrypt.hash(password)
    let user = await User.findOne({username, password:encryptedPassword});
    if(!user){
       res.send("Invalid Credentials").status(404)
    }
    res.status(200).send(user._id);
  } catch (err) {
    res.send(err).status(500);
  }
});

// signup user
router.post("/users/signup", async (req, res) => {
  let { username, password } = req.body;
  if(!username || !password){
    res.send(400).json({message:"Username and password are required"})
  }
  
  try {
    let hash = await bcrypt.hash(password, 10)
    let newUser =  new User({ username, password:hash });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.send(err).status(500);
  }
});
router.put("/users/update/:id", async (req, res) => {
  let { username, password } = req.body;
  let { id } = req.params;
  if(!username || !password || id){
    res.send(400).json({message:"Username, id and password are required"})
  }
  try {
    let update = await User.findByIdAndUpdate(id, {
      $set: { username: username, password: password },
    });
    res.send(update).status(202);
  } catch (err) {
    res.send(err).status(500);
  }
});

router.delete("/users/:id", async (req, res) => {
  let { id } = req.params;
  if(!id){
    res.send(400).json({ message:"Id is required"})
  }
  try {
    let deleted = await User.findByIdAndDelete(id);
    res.send(deleted).status(204);
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = router