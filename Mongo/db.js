const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
// const uri = "mongodb+srv://pk6669018:Rk9899210087@cluster0.xnkznc8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connectToMongo(dbName) {
  try {
    await client.connect();
    console.log("Connected to Mongo");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log(err);
  }
}
module.exports = { connectToMongo };
