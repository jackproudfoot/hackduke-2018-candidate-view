const admin = require('firebase');
var serviceAccount = require('./../hackduke-oxfam-0489464f6089.json');

admin.initializeApp({
    apiKey: "AIzaSyAbM09tL_4whOMx2bQvvhx9a858OqN6SHo",
    authDomain: "hackduke-oxfam.firebaseapp.com",
    databaseURL: "https://hackduke-oxfam.firebaseio.com",
    projectId: "hackduke-oxfam",
    storageBucket: "hackduke-oxfam.appspot.com",
    //credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

const settings = {timestampsInSnapshots: true}
db.settings(settings);

module.exports.admin = admin;
module.exports.db = db;