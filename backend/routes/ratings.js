var express = require('express');
var router = express.Router();

var admin = require('./../modules/firebase.js').admin;

var mongoose = require('mongoose')

router.post('/', function(req, res, next) {
    var uid = admin.auth().currentUser.uid;
    
    var User = mongoose.model('User');

    User.findOne({ uid: uid }, function(err, user) {
        if (err) return console.error(err);
        
        if (user === null) {
            res.json({});
        }
    	else {
            
            console.log(user)
            var found = false;
            for (var i = 0; i < user.ratings.length; i++) {
                if (user.ratings[i].candidate === req.body.candidate) {
                    user.ratings[i] = req.body;
                    found = true;
                    break;
                }
            }
            if (!found) {
                user.ratings.push(req.body);
            }
            
            console.log(user)
            
            user.save(function(err, newU) {
    			if (err) return console.error(err);
    			res.json(newU)
    		});
    	}
    });
});

module.exports = router;
