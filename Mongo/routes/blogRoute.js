const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models/db");

router.post("/blog/:id", async (req, res) => {
  let { id } = req.params;
  let { title, blog } = req.body;
  if (!title || !blog) {
    res.status(404).json({ message: "Please enter a Title or Blog" });
  }
  try {
    let user = await User.findOne({ _id: id });
    let newBlog = new Blog({
      userId: id,
      username: user.username,
      title: title,
      blog: blog,
    });
    await newBlog.save();
    res.status(201).send(newBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
