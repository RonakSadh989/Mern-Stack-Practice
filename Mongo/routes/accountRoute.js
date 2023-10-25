const express = require('express');
const { User } = require('../models/db');
const router = express.Router()

router.post("/follow", async(req, res)=>{
    let {toFollow, id} = req.body
    let userFollow = await User.findOne({username:toFollow})
    let user = await User.findOne({_id: id})
    let follow = await User.findByIdAndUpdate(userFollow._id, {$set: {follower: [user.username]}})
    res.send(follow)
})
module.exports = router