const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'rollNo', title: 'Roll No' },
        { id: 'phn', title: 'Name' },
        { id: 'nameF', title: "Father's name" },
        { id: 'phnF', title: "Father's Phone No" },
        { id: 'eml', title: 'Email' },
        { id: 'adr', title: 'Address' },
    ]
});

var name1 = req.body.name1;
var roll = req.body.RollNo;
var father = req.body.nameF;
var phone = req.body.num;
var parent = req.body.pnum;
var email = req.body.emails;
var address = req.body.message;
const records = [
    { name: `${name1}`, rollNo: `${roll}`, phn: `${phone}`, nameF: `${father}`, phnf: `${parent}`, eml: `${email}`, adr: `${address}` }
];

csvWriter.writeRecords(records)
    .then(() => {
        console.log("done");
    });