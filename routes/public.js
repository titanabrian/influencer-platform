let express=require("express");
let router=express.Router();

// Require controller
let AuthController = require("../controllers/AuthController");


router.post("/auth",AuthController.auth)

module.exports=router;