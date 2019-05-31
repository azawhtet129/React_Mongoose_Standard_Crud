const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
var models = require('./models/all-models');
const businessRoute = require('../router/business.router');
// const config = require('./DB.js'); 
// var

// mongoose.Promise = global.Promise;

// mongoose.connect(config.DB, {useNewUrlParser:true}).then(
//     () => {console.log('DB is connected');},
//     err => {console.log('Can not connect to the db' + err)}
// );
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/business', businessRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    console.log('Example app listening on port port!', PORT);
});

//Run app, then load http://localhost:port in a browser to see the output.