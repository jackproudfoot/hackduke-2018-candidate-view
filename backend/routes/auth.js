var express = require('express');
var router = express.Router();

var admin = require('./../modules/firebase.js').admin;

var mongoose = require('mongoose')

router.post('/', function(req, res, next) {
    var credential = admin.auth.FacebookAuthProvider.credential(req.body.accessToken);

    admin.auth().signInAndRetrieveDataWithCredential(credential).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    })
    .then(response => {
        var uid = admin.auth().currentUser.uid;
        
        var User = mongoose.model('User');
	
        User.findOne({ uid: uid }, function(err, user) {
            if (err) return console.error(err);
            
            if (user === null) {
                var newUser = new User({
        		    uid: uid,
        			ratings: [],
        			admin: false
        		});
			
        		newUser.save(function(err, newU) {
        			if (err) return console.error(err);
        			res.json(newU)
        		});
        	}
        	else {
        		res.json(user);
        	}
        });
    })
});

module.exports = router;
