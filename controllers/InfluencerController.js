const Influencer=require("../models/Influencer.js")

exports.update=(req,res)=>{
    const user = req.body;
    const influencer=new Influencer(user);
    // Not using validation yet
    influencer.update((err,result)=>{
        if(err==null){
            res.json({success:"Success Update Data "+influencer.name,data:influencer});
        }else{
            res.status(500);
            res.json({error:"Internal Server Error"}); 
        }
    })
}

exports.getAll=(req,res)=>{
    const influencer=new Influencer({});
    let inf=influencer.getAll((err,result)=>{
        if(err==null){
            res.json({success:"Success Get Data",data:result})
        }else{
            res.status(500);
            res.json({error:"Internal Server Error"})
        }
    })
}