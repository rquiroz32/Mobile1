const mysql = require("mysql");

//using Var so I can create the variable without declaring a value
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);  
}
else
{
  
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db",
  Port: 3306
});
}

//Make coonnection
connection.connect((err, response)=>{
  
  if (err){
    console.log("Error connecting " + err.stack);
    
  }
  
  console.log("currently connected as "+ connection.threadId)
  
  
})



// Export Connection
module.exports = connection