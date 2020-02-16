var connection= require("./connection.js")
var migration = require('mysql-migrations');

// var connection = mysql.createPool({
//   connectionLimit : 10,
//   host     : process.env.DB_HOST || "localhost",
//   user     : process.env.DB_USER,
//   password : process.env.DB_PASSWORD,
//   database : process.env.DB_DATABASE
// });



migration.init(connection, __dirname + '/migrations');