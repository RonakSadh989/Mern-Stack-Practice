const express = require("express");
const { User } = require("../models/db");
const router = express.Router();

router.post("/follow", async (req, res) => {
  let { toFollow, id } = req.body;
  if (!toFollow || !id) {
    res.status(400).json({ message: "Please enter Credentials" });
  }
  try {
    let userToFollow = await User.findOne({ username: toFollow });
    let userthatFollow = await User.findOne({ _id: id });
    let follower = await User.findByIdAndUpdate(userToFollow._id, {
      $push: { follower: userthatFollow.username },
    });
    let following = await User.findByIdAndUpdate(userthatFollow._id, {
      $push: { following: userToFollow.username },
    });
    res.json({ follower: follower });
    res.json({ following: following });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
module.exports = router;
