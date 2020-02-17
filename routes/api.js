let express=require("express");
let router=express.Router();
let auth = require("../middleware/authmiddleware");

router.use(auth);

router.get("/",(req,res)=>{
    res.json({msg:"Hey This Home Api"});
})

module.exports=router;