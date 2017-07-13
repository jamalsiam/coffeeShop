var Item = require('./models/itemModel.js');


module.exports.handleItem = {
  // get book from data base
	addItem: function(req, res)  {	
	Item.create(req.body)
	res.json("s")
	}
}

