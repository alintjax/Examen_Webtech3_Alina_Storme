var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if(err) return console.log(err);
    db = database.db('exam');
})

router.get('/',(req,res) => {
    db.collection('students').find().toArray((err,result) => {
        if(err) return console.log(err);
       // console.log(result);
        res.render('list.ejs',{students: result})
    })
})
router.get('/add/', (req,res) => {
    res.render('add.ejs');
})
router.post('/add',(req,res) => {
    db.collection('items').insertOne(req.body);
    res.redirect('/students');
})
module.exports = router;