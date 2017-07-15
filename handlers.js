var Item = require('./models/itemModel.js');
var Bill = require('./models/billModel.js');
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
		Order.findOne({tableNumber: req.body.tableNumber})
		.exec(function (err, items) {
			if (items) {
				var record=items;

				record.item.push({ name:req.body.name,
					piece:req.body.piece,
					price:req.body.price })
			//Order.update(record)

		Order.create(record)





		} else
		{
			Order.create(
				{ tableNumber: req.body.tableNumber , 
					item: [{ name:req.body.name,
						piece:req.body.piece,
						price:req.body.price }] }
						);


		}
	})
	},
	getSelectedItem:function(req,res){	
		Order.find()
		.exec(function (err, items) {
			if (items) {
				res.json(items);
			} 
		})
	},
	removeItem:function(req,res){
		console.log({tableNumber:req.body.tableNumber,
			piece:req.body.piece,
			price:req.body.price})


		if(req.body.added){
			Bill.create({tableNumber:req.body.tableNumber,
				piece:req.body.piece,
				price:req.body.price});

			Order.findOne({_id:req.body._id})
			.remove()
			.exec(function (err, items) {
				res.json("done")
			} 
			)
		}
		else{
			Order.findOne({_id:req.body._id})
			.remove()
			.exec(function (err, items) {
				res.json("done")
			} 
			)

		}
	}
}


module.exports.handleBill = {

	getAllTables: function(req,res){	
		Bill.find()
		.exec(function (err, Table) {
			res.json(Table)
		} 
		)
	},
	deleteTable:function(req,res){	

	}
}	