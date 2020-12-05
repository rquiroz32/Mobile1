const connection = require ("./connection.js")


const orm = {
  selectAll: function (err, response, cb){
    connection.query("Select * From [table]")
  },
}
