import express from "express"
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())

import {getStarwars} from "./mongoDBAPI.js"

app.get("/",await getStarwars)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log(`React on http://localhost:${PORT}`)
})