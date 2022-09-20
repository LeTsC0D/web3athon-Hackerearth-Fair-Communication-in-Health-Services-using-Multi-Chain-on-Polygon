var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //await init_web3()
    res.render('index');
});


router.post('/user', function (req, res) {
    // var name =  ' ' + req.body.uname +' '+req.body.psw; 
    var entity=req.body.entity 
    var Id=req.body.Id
    var Uname=req.body.Username
    var Password=req.body.Password
    console.log(entity,Id,Uname,Password)
    if(entity=="Patient"){
        res.render('index1',{id:Id,username:Uname,password:Password});
    }else if(entity=="Doctor"){
        res.render('index2',{id:Id,username:Uname,password:Password});
    }else{
        res.render('index3',{id:Id,username:Uname,password:Password});
    }  
});


router.get('/doctor', function (req, res, next) {
    //await init_web3()
    res.render('index2');
});

router.get('/hospital', function (req, res, next) {
    //await init_web3()
    res.render('index3');
});





module.exports = router;
