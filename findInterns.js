var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Ogochukwu_Odom");
    var query = { rating: "7" };
    dbo.collection("myMovies").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function (err, result) {
    // dbo.collection("myMovies").find(query, { useUnifiedTopology: true }).toArray(function (err, result) {
        if (err) throw err;
        console.log("This shows all the movie titles alone")
        console.log(result);
        db.close();
    });
});