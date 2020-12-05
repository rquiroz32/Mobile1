const mysql = require ("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testDB",
  Port: 3306
});

connection.connect((err, response)=>{
  
  if (err){
    console.log("Error connecting " + err.stack);
    
  }
  
  console.log("currently connected as "+ connection.threadId)
  
  
})






module.export = connection