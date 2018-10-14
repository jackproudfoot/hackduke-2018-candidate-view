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
            
            var newRatings = new Array();
            
            var userRatings = undefined;
            var found = false;
            for (var j = 0; j < user.ratings.length; j++) {
                var oldRating = user.ratings[j];
                
                var newRating = {candidate: oldRating.candidate, ratings: new Array()}
                
                if (oldRating.candidate === req.body.candidate) {
                    found = true;
                    for (var i = 0; i < oldRating.ratings.length; i++) {
                        newRating.ratings.push({category: req.body.ratings[i].category, rating: req.body.ratings[i].rating})
                    }
                }
                else {
                    for (var i = 0; i < oldRating.ratings.length; i++) {
                        newRating.ratings.push({category: oldRating.ratings[i].category, rating: oldRating.ratings[i].rating})
                    }
                }
                
                newRatings.push(newRating)
                
            }
            
            user.ratings = newRatings;
           
            if (!found) {
                user.ratings.push(req.body);
            }
            
                   
           
            
            user.save(function(err, newU) {
    			if (err) return console.error(err);
    		});
            
            var Candidate = mongoose.model('Candidate');
            
            Candidate.findById(req.body.candidate, function(err, candidate) {
                var newRatings = new Array()
                var numRates = candidate.numberOfRatings;
                var newApproval = 0;
                
                for (var i = 0; i < candidate.ratings.length; i++) {
                    var newRanking = ((candidate.ratings[i].ranking * numRates) + req.body.ratings[i].rating) / (!found ? numRates + 1 : numRates)
                    newRatings.push({category: candidate.ratings[i].category, ranking: newRanking})
                    newApproval = newApproval + newRanking;
                }
                
                if (!found) {
                    numRates = numRates + 1;
                }
                
                newApproval = newApproval / candidate.ratings.length
                
                candidate.ratings = newRatings;
                candidate.numberOfRatings = numRates;
                candidate.approval = newApproval
                
                
                candidate.save(function(err, newC) {
    			    if (err) return console.error(err);
                    res.json(newC)
    		    });
                
                
            });
    	};
    });
});

module.exports = router;
