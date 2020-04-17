var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Ogochukwu_Odom");
    var myquery = { movie: "The Banker" };
    var newvalues = { $set: { movie: "Shaft", year: "2019", rating: "8.5" } };
    dbo.collection("myMovies").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res)
    // dbo.collection("myMovies").find({}).toArray(function (err, result) {
    //         if (err) throw err;
            // console.log(result);
            db.close();
        });
        // db.close();
    // });
});