const connection = require("../connection");


class Influencer{

    constructor(influencer){
        this.table="influencers"
        this.name=influencer.name;
        this.email=influencer.email;
        this.pict=influencer.pict;
        if(typeof(influencer.interest==="object")){
            if(influencer.interest==null){
                this.interest=JSON.stringify([]);
            }else{
                this.interest=JSON.stringify(influencer.interest);
            }
        }else{
            this.interest=influencer.interest;
        }
    }

    find(field, condition, first=false, callback){
        const query=`SELECT * FROM ${this.table} WHERE ?? = ?`;
        connection.query(query,[field,condition], function (error, results) {
            if(error){
                callback(error,null)
            }else{
                if(results.length>0){
                    if(first===false){
                        callback(null,results);                    
                    }else{
                        callback(null,results[0]);
                    }
                }else{
                    callback(null,[]);
                }
            }
        });
    }

    save(callback=null){
        const query=`INSERT INTO ${this.table}(name,email,interest,pict) VALUES (?,?,?,?)`;
        connection.query(query,[this.name,this.email,this.interest,this.pict], function (error, results) {
            if(error){
                callback(error,null);
            }else{
                if(callback){
                    callback(null,{msg:"Success Insert Data"});
                }
            }
        });
    }
}

module.exports=Influencer;