import express from "express";
import 'dotenv/config'

const app = express()

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

const PORT =  process.env.PORT || 3000;

app.listen(PORT,(req,res)=>{
    console.log(`the server is running on ${PORT}`)
})