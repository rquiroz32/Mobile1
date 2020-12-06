const mysql = require ("mysql");

const connection 
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);  
}else{
  
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testDB",
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
module.export = connection