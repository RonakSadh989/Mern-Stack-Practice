const express = require('express');
const router = express.Router()
const {User} = require("../models/db")


router.post("/blog/:id", async (req, res)=>{
  let {id} = req.params
  let user = await User.find({_id: id})
  let blog = new User({})
})