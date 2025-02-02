const express = require('express');
const app = express()
const dotenv = require("dotenv");

const cors = require("cors");
dotenv.config({});
app.use(express.json());

const PORT = 5000

const IndexRoute=require("./Routes/route")
const session = require("express-session");

const allowedOrigins = [
    'http://localhost:3000',
];
  
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
        } else {
        callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Include if using cookies or credentials
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(cors(corsOptions));

app.use("/api",IndexRoute)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})