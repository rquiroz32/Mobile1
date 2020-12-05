const connection = require ("./connection.js")


const orm = {
  selectAll: function (tablename, cb){
    connection.query("Select * From"+ tablename+";")
  },
  insertOne: function (tablename, col1,col2,val1,val2,cb){
    connection.query(`Insert into ${tablename} (${col1},${col2}) VALUES (${val1}, ${val2});`)
    
  }
}

/*
insertOne()
updateOne()
deleteOne()
*/


