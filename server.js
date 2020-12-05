const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.use("./controller/routes.js")





app.listen(PORT, function (request, response){
  
  console.log("Now listening on Port "+PORT)
  
});
