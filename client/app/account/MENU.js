angular.module('menu', [])

.controller('menuController', function ($scope , $window , $location  ,Item) {
	Item.getItem()
	.then(function(i){
		$scope.items=i;
	})
});
