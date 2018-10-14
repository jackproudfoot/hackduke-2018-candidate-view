var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')

var db = require('./../modules/firebase.js').db;

router.get('/', function(req, res, next) {
    var Category = mongoose.model('Category');
    
    Category.find({}, function(err, categories) {
        if (err) return console.error(err);
        
        res.json(categories)
    })
});

router.get('/:id', function(req, res, next) {
    var Category = mongoose.model('Category');
    
    Category.findById(req.params.id, function(err, category) {
        if (err) return console.error(err);
        
        res.json(category)
    })
});

module.exports = router;
