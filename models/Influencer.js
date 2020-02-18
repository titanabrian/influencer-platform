const connection = require("../connection");


class Influencer{

    constructor(influencer){
        this.table="influencers"
        this.name=influencer.name;
        this.email=influencer.email;
        this.pict=influencer.pict;
        this.instagram=influencer.instagram;
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
        const query=`INSERT INTO ${this.table}(name,email,interest,pict,instagram) VALUES (?,?,?,?,?)`;
        connection.query(query,[this.name,this.email,this.interest,this.pict,this.instagram], function (error, results) {
            if(error){
                callback(error,null);
            }else{
                if(callback){
                    callback(null,{msg:"Success Insert Data"});
                }
            }
        });
    }

    update(callback=null){
        const query=`UPDATE ${this.table} SET name=?, instagram=?, interest=? WHERE email=?`;
        connection.query(query,[this.name,this.instagram, this.interest, this.email], function (error, results) {
            if(error){
                callback(error,null);
            }else{
                if(callback){
                    callback(null,{msg:"Success Update Data"});
                }
            }
        });
    }

    getAll(callback=null){
        const query=`SELECT * FROM ${this.table} WHERE instagram IS NOT NULL`;
        connection.query(query, function (error, results) {
            if(error){
                callback(error,null);
            }else{
                if(callback){
                    callback(null,results);
                }
            }
        });
    }
}

module.exports=Influencer;