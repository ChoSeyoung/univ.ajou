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

router.get('/leicity', (req, res, next) => {
    db.query("select city from `youth_agency` group by city ", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.get('/leicategory', (req, res, next) => {
    db.query("select category from `youth_agency` group by category ", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.get('/leifilter', (req, res, next) => {
    db.query("select * from `youth_agency`", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

//지원추가 
router.get('/month', (req, res, next) => {
    db.query("select vol_date from `volunteer` group by vol_date", (err, rows) => {
        if(!err){
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})



router.get('/vol', (req, res) => {
    db.query("SELECT * FROM volunteer", (err, rows) => {
        if(!err) {
            res.send(rows);
        }else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})




router.get('/june', (req, res) => {
    db.query("SELECT * FROM volunteer WHERE vol_month=6", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})

router.get('/july', (req, res) => {
    db.query("SELECT * FROM volunteer WHERE vol_month=7", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})

router.get('/august', (req, res) => {
    db.query("SELECT * FROM volunteer WHERE vol_month=8", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})

router.get("/api/isLogin", (req, res) => {
    
    const userId = req.query.id;
    const userPw = req.query.pw;

    db.query("select count(*) as cnt from getuser where id='"+userId+"' and pw='"+userPw+"'", (err, rows, fields) => {
        console.log(rows[0].cnt)
        
        res.send({rs : rows[0].cnt});
    });
})

router.get("/api/isSignup", (req, res) => {
    
    const userId = req.query.id;
    const userPw = req.query.pw;
    const userEmail = req.query.email;
    const userName = req.query.name;

    db.query("select count(*) as cnt from getuser where id='"+userId+"' and pw='"+userPw+"' and email='"+userEmail+"' and name='"+userName+"'", (err, rows, fields) => {
        console.log(rows[0].cnt)
        
        res.send({rs : rows[0].cnt});
    });
})
//여기까지 지원

router.get('/schedule', (req, res, next) => {
    db.query("select * from schedule", (err, rows) => {
        res.send(rows);
    })
});

module.exports = router;