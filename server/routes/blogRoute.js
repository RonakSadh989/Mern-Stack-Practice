const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models/db");

// Create and sign a JWT

router.get("/blog", async (req, res) => {
  try {
    let blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (err) {
    res.send(err).status(500);
  }
});
router.post("/blog/:id", async (req, res) => {
  let { id } = req.params;
  let { title, content } = req.body;

  if (!title || !content) {
    res.status(404).json({ message: "Please enter a Title or Content" });
  }
  try {
    let user = await User.findOne({ _id: id });
    if (!user) {
      res.status(404).send("User not Found or incorrect ID");
    }
    let newBlog = new Blog({
      userId: id,
      username: user.username,
      title: title,
      content: content,
    });
    await newBlog.save();
    res.status(201).send(newBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/blog/:blogId", async (req, res) => {
  let { blogId } = req.params;
  try {
    let deleteBlog = await Blog.findByIdAndDelete(blogId);
    if (!deleteBlog) {
      res.status(404).send("Invalid ID");
    }
    res.json({ "Blog deleted": deleteBlog }).status(204);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
