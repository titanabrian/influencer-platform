let express=require("express");
let router=express.Router();
let auth = require("../middleware/authmiddleware");

//Controller
let InfluencerController = require("../controllers/InfluencerController.js");

router.use(auth);

router.get("/",(req,res)=>{
    res.json({msg:"Hey This Home Api"});
})

router.post("/update",InfluencerController.update)

module.exports=router;