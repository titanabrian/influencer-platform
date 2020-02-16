let express=require("express");
let router=express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hey This Home Api"});
})

module.exports=router;