var mongoose = require('mongoose');
var Business = require('../Business.js');


// manipulate your data here
Business.find().exec()
.then(results => {
  console.log(results);
  mongoose.connection.close();
});