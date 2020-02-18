let express=require("express");
let router=express.Router();

// Require controller
let AuthController = require("../controllers/AuthController");
let InfluencerController = require("../controllers/InfluencerController");

router.post("/auth",AuthController.auth)
router.get("/influencer",InfluencerController.getAll)

module.exports=router;