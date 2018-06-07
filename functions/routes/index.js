const router = require('express').Router();
const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyAZUvDZxpX8yQEbuZXLS1fu5oVfOzSfc60",
  authDomain: "test-project-2a.firebaseapp.com",
  databaseURL: "https://test-project-2a.firebaseio.com",
  projectId: "test-project-2a",
  storageBucket: "test-project-2a.appspot.com",
  messagingSenderId: "244195612180"
};
firebase.initializeApp(config);
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

var docRef = db.collection('users').doc('alovelace');
var setAda = docRef.set({first: 'Ada', last: 'Lovelace', born: 1815});

/* GET home page. */
router.get('/', (req, res, next) => {

  var citiesRef = db.collection('cities');

  var setSf = citiesRef.doc('SF').set({name: 'San Francisco', state: 'CA', country: 'USA', capital: false, population: 860000});
  var setLa = citiesRef.doc('LA').set({name: 'Los Angeles', state: 'CA', country: 'USA', capital: false, population: 3900000});
  var setDc = citiesRef.doc('DC').set({name: 'Washington, D.C.', state: null, country: 'USA', capital: true, population: 680000});
  var setTok = citiesRef.doc('TOK').set({name: 'Tokyo', state: null, country: 'Japan', capital: true, population: 9000000});
  var setBj = citiesRef.doc('BJ').set({name: 'Beijing', state: null, country: 'China', capital: true, population: 21500000});

  res.render('index', {title: 'Express'});
});

module.exports = router;
