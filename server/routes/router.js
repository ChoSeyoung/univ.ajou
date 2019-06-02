const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');
const rs = "http://localhost:3000";

/* GET home page. */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

router.get('/todaymain', (req, res, next) => {
    db.query("select * from `lunch` where school = '경기과학고' and lunch_date = '2019-06-13'", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.get('/todaydessert', (req, res, next) => {
    db.query("select * from `lunch` where school = '경기과학고' and lunch_date = '2019-06-13'", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.get('/thisweek', (req, res, next) => {
    db.query("select * from `lunch` where school = '경기과학고' and lunch_date between '2019-06-10' AND '2019-06-14'", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.get('/schoolname', (req, res, next) => {
    db.query("select school from `lunch` group by school ", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.get('/brown', (req, res, next) => {
    console.log(req.query.name)
    const p = req.query.name;
    db.query("select * from `lunch` where school='"+p+"' and lunch_date = '2019-06-13'", (err, rows) => {
        res.send({rs : rows})
    });
});

router.get('/week', (req, res, next) => {
    console.log(req.query.name)
    const p = req.query.name;
    db.query("select * from `lunch` where school='"+p+"' and lunch_date between '2019-06-10' AND '2019-06-14'", (err,rows) => {
        res.send({ gs: rows})
    });
})


module.exports = router;