var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
    var dbo1 = db.db("Seniors");
    var myobj = [{ RoomNO: "01", RollNo: "bt20cse111",isAllocated: 1},
    { RoomNO: "02", RollNo: "bt20cse121", isAllocated: 1},
        { RoomNO: "03", RollNo: "", isAllocated: 0},
    { RoomNO: "04", RollNo: "", isAllocated: 0},
    { RoomNO: "05", RollNo: "", isAllocated: 0},
        { RoomNO: "06", RollNo: "bt20cse001", isAllocated: 1 },
    { RoomNO: "07", RollNo: "", isAllocated: 0},
    { RoomNO: "08", RollNo: "", isAllocated: 0},
    { RoomNO: "09", RollNo: "", isAllocated: 0},
    { RoomNO: "10", RollNo: "", isAllocated: 0},
    { RoomNO: "11", RollNo: "", isAllocated: 0},
    { RoomNO: "12", RollNo: "", isAllocated: 0},
    { RoomNO: "13", RollNo: "", isAllocated: 0},
    { RoomNO: "14", RollNo: "", isAllocated: 0},
    { RoomNO: "15", RollNo: "", isAllocated: 0},
    { RoomNO: "16", RollNo: "", isAllocated: 0},
    { RoomNO: "17", RollNo: "", isAllocated: 0},
    { RoomNO: "18", RollNo: "", isAllocated: 0},
    { RoomNO: "19", RollNo: "", isAllocated: 0},
    { RoomNO: "20", RollNo: "", isAllocated: 0},
    { RoomNO: "21", RollNo: "", isAllocated: 0},
    { RoomNO: "22", RollNo: "", isAllocated: 0},
    { RoomNO: "23", RollNo: "", isAllocated: 0},
    { RoomNO: "24", RollNo: "", isAllocated: 0},
    { RoomNO: "25", RollNo: "", isAllocated: 0},
    { RoomNO: "26", RollNo: "", isAllocated: 0},
    { RoomNO: "27", RollNo: "", isAllocated: 0},
    { RoomNO: "28", RollNo: "", isAllocated: 0},
    { RoomNO: "29", RollNo: "", isAllocated: 0},
    { RoomNO: "30", RollNo: "", isAllocated: 0},
    ];

    dbo.collection("Single").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 Record is inserted in single.");
    });

    db.close;
});
