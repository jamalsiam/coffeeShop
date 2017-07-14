var Item = require('./models/itemModel.js');
var Order = require('./models/orderModel.js');


module.exports.handleItem = {
 
	addItem: function(req,res){	
	Item.create(req.body)
	res.json("s")
	},
	getItem:function(req,res){	
	Item.find()
      .exec(function (err, items) {
        if (items) {
          res.json(items);
        } 
      })
	}
}	

module.exports.handleOrder = {
	selectItem: function(req,res){	
	Item.create(req.body)
	},
	getSelectedItem:function(req,res){	
	Item.find()
      .exec(function (err, items) {
        if (items) {
          res.json(items);
        } 
      })
	}
}

