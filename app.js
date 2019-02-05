
var express = require('express');


var app = express();

var MongoDBUtil = require('./modules/mongodb/mongodb.module').MongoDBUtil;
var RabbitController = require('./modules/rabbit/rabbit.module')().RabbitController;

var bodyParser = require('body-parser');

var urlencode = bodyParser.urlencoded({ extended: true });
app.use(express.static('public'));

app.use(bodyParser.json());

MongoDBUtil.init();

app.use('/rabbits', RabbitController);

// SERVER START

app.listen(4040, () => {
    console.log('We are now listening on port 4040 (serverside)');
});