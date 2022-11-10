var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");

/* GET home page. */
router.get('/', function (req, res, next) {
    //await init_web3()
    res.render('index');
});


router.post('/user', async  (req, res)=> {
    // var name =  ' ' + req.body.uname +' '+req.body.psw; 
    var entity=req.body.entity 
    var Id=req.body.Id
    var Uname=req.body.Username
    var Password=req.body.Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    console.log(entity,Id,Uname,Password)
    if(entity=="Patient"){
        res.render('index1',{id:Id,username:Uname,password:hashedPassword});
    }else if(entity=="Doctor"){
        res.render('index2',{id:Id,username:Uname,password:hashedPassword});
    }else{
        res.render('index3',{id:Id,username:Uname,password:hashedPassword});
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
