var express = require('express');
var router = express.Router();

//var firebase = require('firebase')
var admin = require('./../modules/firebase.js').admin;
var db = require('./../modules/firebase.js').db;

//Facebook authentication setup
var provider = new admin.auth.FacebookAuthProvider();
admin.auth().useDeviceLanguage();


router.get('/', function(req, res, next) {
    admin.auth().signInWithPopup(provider).then(function(result) {
        //Facebook access token
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential
        console.log(error)
    })
    
    res.send('respond with a resource');
});

module.exports = router;
