const express= require('express');
const ejs = require('ejs');
const Web3 = require('web3')
var indexRouter = require('./router/route');
const app=express();
const bodyParser = require("body-parser")

app.engine('htm',ejs.renderFile);
app.set('view engine','htm');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/', indexRouter);


const server=app.listen(3000,()=>console.log('server started '));