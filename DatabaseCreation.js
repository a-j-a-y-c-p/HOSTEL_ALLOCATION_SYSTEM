var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
    var dbo1 = db.db("Seniors");

    dbo.createCollection("Single", function (err, res) {
        if (err) throw err;
        console.log("1st year single collection is created successfully");
    });
    dbo.createCollection("Double", function (err, res) {
        if (err) throw err;
        console.log("1st year double collection is created successfully");
    });
    dbo1.createCollection("Single", function (err, res) {
        if (err) throw err;
        console.log("Seniors single collection is created successfully");
    });
    dbo1.createCollection("Double", function (err, res) {
        if (err) throw err;
        console.log("Seniors double collection is created successfully");
    });
    db.close;
});
