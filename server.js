const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');

var handlers = require('./handlers.js')



//middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;



	app.get('/api/getItem',handlers.handleItem.getItem);
	app.post('/api/addItem',handlers.handleItem.addItem);
	app.post('/api/selectItem',handlers.handleOrder.selectItem);
	app.get('/api/getSelectedItem',handlers.handleOrder.getSelectedItem);
	app.post('/api/removeItem',handlers.handleOrder.removeItem);

app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;