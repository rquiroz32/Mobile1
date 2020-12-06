const express = require('express');
const router = express.Router();
const path = require('path')
const burger = require('../models/burgers')

router.get('/', function (req, res){
    res.sendFFile(path.join(__dirname, 'public/index.html'))
});

router.post('/burgers', function (req, res) {
    burger.selectAll(function (data) {
        res.json({ cats: data })
    })
});

router.delete("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;