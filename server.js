const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const routes = require ('./controller/routes.js')
app.use(routes)
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}));



app.listen(PORT, function (request, response){
  
  console.log("Now listening on Port " + PORT)
  
});
