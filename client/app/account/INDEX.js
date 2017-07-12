angular.module('index' , [])

.controller('indexController', function ($scope , $window , $location  /*,aa*/) {
	$scope.login=function(email,password){
		$scope.msg+"Ss"
		if(email=="admin" && password=="admin")
		{
			$window.location="/#/admin_page";
		}else
		$scope.msg="insert the correct email and password"
	}
});


