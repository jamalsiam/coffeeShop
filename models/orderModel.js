var mongoose = require('mongoose');


// use schema to add it to mongo data base
var orderSchema = new mongoose.Schema({
 
tableNumber:{
    type: String,
    required: true,
    // unique: true
  },
  name:{
    type: String,
    required: true,
    // unique: true
  },
  piece:{
    type: String,
    //required: true,
    // unique: true
  }
});
module.exports = mongoose.model('Orders', orderSchema);
