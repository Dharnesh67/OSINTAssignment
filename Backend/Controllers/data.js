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
        
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.castrickclues.com/api/v1/search',
        //     params: {
        //         type: datatype,
        //         query: value,  
        //         cemetery: 'false'
        //     },
        //     headers:{
        //         'accept': 'application/json',
        //         'api-key': process.env.Castrickclues_API 
        //     }
        // };

        // const apiResponse = await axios.request(options);

        const apiResponse = {
            "count": 4,
            "credit_returned": false,
            "data": [
                {
                    "module": "github",
                    "result": [
                        "pathakorama1@gmail.com"
                    ]
                },
                {
                    "module": "skype",
                    "result": [
                        {
                            "avatar": "https://avatar.skype.com/v1/avatars/y2kedar/public",
                            "username": "y2kedar",
                            "name": "Kedar",
                            "country": "United States",
                            "contactType": "Skype4Consumer"
                        },
                        {
                            "avatar": "https://avatar.skype.com/v1/avatars/live:kedar7yadav/public",
                            "username": "live:kedar7yadav",
                            "name": "Kedar",
                            "contactType": "Skype4Consumer"
                        },
                        {
                            "avatar": "https://avatar.skype.com/v1/avatars/kedarked/public",
                            "username": "kedarked",
                            "name": "Kedar",
                            "country": "India",
                            "state": "Maharashtra",
                            "city": "Pune",
                            "contactType": "Skype4Consumer"
                        }
                    ]
                }
            ]
        };

        console.log(apiResponse);  // Logging response before sending
        res.json(apiResponse);

    } catch (error) {
        console.log("Error: ",error);
        
    }
};

module.exports={
    userdata
};