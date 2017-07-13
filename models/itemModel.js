var mongoose = require('mongoose');


// use schema to add it to mongo data base
var itemSchema = new mongoose.Schema({
 
image:{
    type: String,
    required: true,
    // unique: true
  },
  name:{
    type: String,
    required: true,
    // unique: true
  },
  price:{
    type: String,
    //required: true,
    // unique: true
  }
});
module.exports = mongoose.model('Items', itemSchema);
