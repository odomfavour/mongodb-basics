// var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Ogochukwu_Odom";
var slackUsername = 'Ogochukwu Odom'

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created by" + " " + slackUsername);
  db.close();
});