var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/1stYear', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var email = req.body.RollNo

    var query = { isAllocated: 0 };
    var new_query = { Name: `${name}`, RollNo: `${email}`, isAllocated: 1 }
    db.collection('Single').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("rec inserted ");
    })
    return res.redirect('signup_success.html')

})
app.post("/sign_up_double_random", (req, res) => {
    var name = req.body.name;
    var email = req.body.RollNo


    var query = { first: "", isAllocated: 1 };
    var query2 = { second: "", isAllocated: 1 };
    var query3 = { first: "", isAllocated: 0 };
    var new_query = { Name1: `${name}`, first: `${email}`, isAllocated: 2 }
    var new_query2 = { Name2: `${name}`, second: `${email}`, isAllocated: 2 }
    var new_query2 = { Name1: `${name}`, first: `${email}`, isAllocated: 1 }
    var modCount = 0;
    db.collection('Double').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        if (collection.modifiedCount > 0)
            modCount = collection.modifiedCount;
    })
    if (modCount == 0) {
        db.collection('Double').updateOne(query2, { $set: new_query2 }, (err, collection) => {
            if (err) {
                throw err;
            }
            if (collection.modifiedCount > 0)
                modCount = collection.modifiedCount;
        })
    }
    if (modCount == 0) {
        db.collection('Double').updateOne(query3, { $set: new_query2 }, (err, collection) => {
            if (err) {
                throw err;
            }
            if (collection.modifiedCount > 0)
                modCount = collection.modifiedCount;
        })
    }


    console.log("Done ");
    return res.redirect('signup_success.html')

})


app.post("/sign_up_double_fixed", (req, res) => {
    var name = req.body.name;
    var email = req.body.RollNo
    var name1 = req.body.name1;
    var email1 = req.body.RollNo1;

    var query = { isAllocated: 0 };
    var new_query = { Name1: `${name}`, first: `${email}`, Name2: `${name1}`, second: `${email1}`, isAllocated: 2 }

    db.collection('Double').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("rec inserted");
    })
    return res.redirect('signup_success.html')

})

app.post("/swap_1st", (req, res) => {
    var roll1 = req.body.RollNo;
    var roll2 = req.body.RollNo1;
    if (roll1 === "" && roll2 === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query1f = { first: `${roll1}` };
    var query1s = { second: `${roll1}` };
    var query2f = { first: `${roll2}` };
    var query2s = { second: `${roll2}` };
    var new_query1f = { first: `${roll1}` };
    var new_query1s = { second: `${roll1}` };
    var new_query2f = { first: `${roll2}` };
    var new_query2s = { second: `${roll2}` };
    db.collection("Double").updateOne(query1f, { $set: new_query2f }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double").updateOne(query1s, { $set: new_query2s }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double").updateOne(query2f, { $set: new_query1f }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double").updateOne(query2s, { $set: new_query1s }, function (err, res) {
        if (err) throw err;
    })
    return res.redirect('signup_success.html')
})

app.post("/delete_single", (req, res) => {
    var roll = req.body.RollNo;
    if (roll === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query = { RollNo: `${roll}` };
    var new_query = { RollNo: "", isAllocated: 0 };
    db.collection("Single").updateOne(query, { $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0)
            console.log("Record deleted successfully.")
        else
            console.log("Record not found!")
    })
    return res.redirect('signup_success.html')
})
app.post("/delete_double", (req, res) => {
    var roll = req.body.RollNo;
    if (roll === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query = { first: `${roll}` };
    var query2 = { second: `${roll}` };
    var new_query = { first: "" };
    var new_query2 = { second: "" };
    db.collection("Double").updateOne(query, { $inc: { isAllocated: -1 }, $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    db.collection("Double").updateOne(query2, { $inc: { isAllocated: -1 }, $set: new_query2 }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    return res.redirect('signup_success.html')
})


var db = mongoose.connection;

db.on('error', () => console.log("error in connecting to database"));
db.once('open', () => console.log("connected to database"))

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("Port 3000");