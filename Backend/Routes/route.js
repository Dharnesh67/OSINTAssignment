const express = require("express");
const router = express.Router();

const {userdata}=require("../Controllers/data")

router.post("/getinfo",userdata);
module.exports = router;
