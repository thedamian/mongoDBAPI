import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// Replace the uri string with your connection string.
const uri = process.env.MONGOURI
console.log("Mongo uri",uri)
const client = new MongoClient(uri);
const db = client.db("sample_mflix");
const moviesCollection = db.collection("movies");

// console.log(await moviesCollection.findOne({}))
export const getStarwars = async (req,res)=> {
let query = { title: { $regex: /star wars/i } }; //seach for "terminator" anywhere in the title and ignore case
let movieArray = await moviesCollection
  .find(query)
  //.limit(3)
  .toArray() // make it into an array
res.status(200).json(movieArray)
}
