const axios = require("axios");
const dotenv = require("dotenv");
const { response } = require("express");

const userdata=async(req,res)=>{
    try {

        console.log(req.body);
        const {datatype,value}=req.body;
        // res.json({ message: "API is working!" });
        // const {type,data} = req.body; // Extract username from request body
        console.log(datatype," + ",value);
        
        const options = {
            method: 'GET',
            url: 'https://api.castrickclues.com/api/v1/search',
            params: {
                type: datatype,
                query: value,  
                cemetery: 'false'
            },
            headers:{
                'accept': 'application/json',
                'api-key': "c5e5346bc82908e1f5984ffaf3791f5a" 
            }
        };

        const apiResponse = await axios.request(options);

        console.log(apiResponse.data);
        
        res.json(apiResponse.data); 

    } catch (error) {
        console.log("Error: ",error);
        
    }
};

module.exports={
    userdata
};