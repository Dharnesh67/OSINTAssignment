const express = require('express');
const app = express()
const dotenv = require("dotenv");

const cors = require("cors");
dotenv.config({});

const PORT = 5000

const IndexRoute=require("./Routes/route")

app.use(cors({
    origin: "http://localhost:3000", // Allow frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true // If you're using cookies or authentication
}));

app.use(express.json()); // To parse JSON requests


app.use("/api",IndexRoute)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})