angular.module('order' , [])

.controller('orderController', function ($scope , $window , $location ,Item) {
	Item.getItem()
	.then(function(i){
		$scope.items=i;
	})

});


