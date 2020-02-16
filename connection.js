var driver = require('mysql');

var connection = driver.createPool({
    connectionLimit : 10,
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "influencer_platform"
  }); 

module.exports=connection;