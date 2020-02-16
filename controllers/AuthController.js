const Influencer=require("../models/Influencer.js")

exports.auth=(req,res)=>{
    const user = req.body;
    const influencer=new Influencer(user);
    influencer.find("email",influencer.email,true,(error,result)=>{
        if(error){
            res.status(500);
            res.json({msg:"Internal Server Error"});
        }else{
            if(result.length<=0){
                influencer.save((error,result)=>{
                    if(error){
                        res.status(500);
                        res.json({error:"Internal Server Error"}); 
                    }else{
                        res.json({success:`Success Added Influencer ${influencer.name}`,data:influencer});
                    }
                });
            }else{
                res.json({success:`Influencer ${influencer.name} Already Exists`, data:result});
            }
        }
    });
}