angular.module('order' , [])

.controller('orderController', function ($scope , $window , $location ,Item ,Order) {
 var number = prompt("Please enter your table number", "");
 if(!number)
 	$window.location="/#/mian";

	Item.getItem()
	.then(function(i){
		$scope.items=i;
	})


$scope.selectItem=function(itemName,piece){
	if(!piece)
	piece=1;
	
	Order.selectItem({
		tableNumber:number,
		name:itemName,
		piece:piece
	})

}
});

