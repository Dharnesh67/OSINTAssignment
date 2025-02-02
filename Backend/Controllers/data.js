const axios = require("axios");
const dotenv = require("dotenv");
const { response } = require("express");

const userdata=async(req,res)=>{
    try {
        const username = req.body.username; // Extract username from request body

        const options = {
            method: 'GET',
            url: 'https://api.castrickclues.com/api/v1/search',
            params: {
                type: 'username',
                query: username,  
                cemetery: 'false'
            },
            headers: {
                'accept': 'application/json',
                'api-key': process.env.Castrickclues_API 
            }
        };

        axios.request(options)
            .then(response => {
                console.log("API Response:", JSON.stringify(response.data, null, 2)); // Pretty-print the response
            })
            .catch(error => {
                console.error("Error:", error.response ? error.response.data : error.message);
            });
            res.send(response)

    } catch (error) {
        console.log("Error: ",error);
        
    }
};

module.exports={
    userdata
};