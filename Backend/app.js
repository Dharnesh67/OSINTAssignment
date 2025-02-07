const express = require('express');
const app = express()
const dotenv = require("dotenv");

const cors = require("cors");
dotenv.config({});

const PORT = 5000

const IndexRoute=require("./Routes/route")

app.use(cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true 
}));

app.use(express.json()); 


app.use("/api",IndexRoute)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})