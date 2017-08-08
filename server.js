const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const database = require('./api/config/database');

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(database.dbStr, database.dbOptions)
    .then(result => console.log('connected to mongodb successfully.'))
    .catch(err => console.log('Error while connecting to mongodb: ' + err + ''));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config the response
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

//config the routes
app.use('/api', require('./api/routes/index'));

app.listen(3000, 'localhost');