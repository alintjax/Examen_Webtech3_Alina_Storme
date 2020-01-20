var express = require('express');
const app = express()
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017/exam', (err, database) => {
    if(err) return console.log(err)
    db = database.db('exam');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port 3000')
    })
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

// Redirect to list
app.get('/', (req, res) => {
    res.redirect('/list')
 })
 
 // List all students
 app.get('/list', (req, res) => {
   db.collection('students').find().sort({naam: 1, geboortedatum: 1, studierichting: 1}).toArray((err, result) => {
     if (err) return console.log(err)
     res.render('list.ejs', { students: result })
   })
 })
router.get('/add/', (req,res) => {
    res.render('add.ejs');
})
router.post('/add',(req,res) => {
    db.collection('students').insertOne(req.body);
    res.redirect('/students');
})
module.exports = router;