const {connectToMongo} = require("./db")
const express = require("express")
const app  = express()
app.use(express.json())


app.get("/users",async (req, res) => {
    const db = await connectToMongo("myDatabase")
  let collection =  db.collection("users")
  let result=  await collection.find().toArray()
    res.json(result)
})

app.post("/users",async (req, res)=>{
   const db = await connectToMongo("myDatabase")
   let collection = db.collection("users")
   let result = await collection.insertOne(req.body)
   res.send(result)
})


app.put("/users/:name",async (req, res)=>{
    let {name} = req.params
    const db = await connectToMongo("myDatabase")
    let collection = db.collection("users")
    let result = collection.updateOne({name: name},{$set:{name:req.body.name, pass:req.body.pass}})
    res.send(result.modifiedCount)
})

app.delete("/users/:name", async (req, res) => {
    let {name} = req.params
    const db = await connectToMongo("myDatabase")
    let collection = db.collection("users")
    let result = collection.deleteOne({name: name})
    res.send(result.deletedCount)
})

app.listen(3000, ()=>{
    console.log("listening to the database")
})



