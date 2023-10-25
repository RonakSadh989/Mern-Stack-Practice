const express = require('express');
const { User } = require('../models/db');
const router = express.Router()
router.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.send(err).status(500);
  }
});

router.post("/users", async (req, res) => {
  try {
    let { username, password } = req.body;
    let newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.send(err).status(500);
  }
});
router.put("/users/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { username, password } = req.body;
    let update = await User.findByIdAndUpdate(id, {
      $set: { username: username, password: password },
    });
    res.send(update).status(202);
  } catch (err) {
    res.send(err).status(500);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deleted = await User.findByIdAndDelete(id);
    res.send(deleted).status(204);
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = router