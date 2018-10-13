var express = require('express');
var router = express.Router();

var db = require('./../modules/firebase.js').db;

router.get('/', function(req, res, next) {
    var candidatesRef = db.collection('candidates');
   
    var allCandidates = candidatesRef.get().then(snapshot => {
        var candidates = []
        snapshot.forEach(candidate => {
            candidates.push({
                id: candidate.id,
                data: candidate.data()
            })
        })
        res.send(candidates)
    })
    .catch(err => {
        console.log('Error getting candidates.')
    })
    
    //res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
    
    var candidateRef = db.collection('candidates').doc(req.params.id)
    
    var getDoc = candidateRef.get().then(doc => {
        if (!doc.exists) {
            res.send('No candidate found')
        } else {
            res.send(doc.data())
        }
    })
    .catch(err => {
        console.log('Error fetching candidate document', err)
    })
});

module.exports = router;
