const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path')
const burger = require('../models/burgers')

router.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/burgers', function (req, res) {
    burger.selectAll(function (data) {
        res.json({ burgers: data })
    })
});




router.post('/burgers', function (req, res) {
    console.log("value of req.body is " + JSON.stringify(req.body));
    burger.insertOne(['burger_name, devoured'],[JSON.stringify(req.body.burger_name), "0"], function (data) {
        res.json({ burgers: data })
    })
});

router.delete("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.deleteOne(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;