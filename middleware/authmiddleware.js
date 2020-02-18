let axios = require("axios");

module.exports=async function(req,res,next){    

    if(typeof(req.headers.authorization)=="undefined"){
        res.status(401)
        return res.json({msg:"Unauthorized request"});
    }else{
        let options={
            method:"POST",
            url:"https://www.googleapis.com/oauth2/v3/userinfo",
            headers:{authorization:req.headers.authorization}
        }
        await axios(options)
        .then(res=>{
            return next();
        })
        .catch(err=>{
            res.status(401);
            res.json({msg:"Unauthorized request"})

        })
    }
}