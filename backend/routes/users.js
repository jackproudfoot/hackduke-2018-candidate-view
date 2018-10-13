var express = require('express');
var router = express.Router();

var db = require('./../modules/firebase.js').db;

/*
    var user = {
        first: 'Billy',
        last: 'Bob',
        age: 40
    };

    //console.log(db)
    
    var docRef = db.collection('candidates').add(billyBob);
*/

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
