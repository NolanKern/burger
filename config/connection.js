// Require SQL for database usage
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 9001,
    host: "localhost",
    user: "root",
    password: "Solhtar1aa",
    database: "burgers_db"
  });

// Initialize connection to my sql
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected to ID: "+ connection.threadId);
});

// export the connection for ORM usage
module.exports = connection;