var MongoClient = require('mongodb').MongoClient;
const findDocuments = require('./findInterns');
const updateDocuments = require('./updateInterns')
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Ogochukwu_Odom");
  const myobj = [
    { movie: "The Banker", year: "2020", rating: "8" },
    { movie: "Bad Boys", year: "2020", rating: "7" },
    { movie: "The Hunt", year: "2020", rating: "7" },
    { movie: "Bloodshot", year: "2020", rating: "7.5" },
    { movie: "First Cow", year: "2020", rating: "6.5" }
  ]
  dbo.createCollection("myMovies", function(err, res) {
    if (err) throw err;
    console.log("Interns collection created!");
    dbo.collection("myMovies").insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log(res)
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
      
    });
  });
});