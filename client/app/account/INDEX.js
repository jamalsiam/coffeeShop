angular.module('index' , [])

.controller('indexController', function ($scope , $window , $location  /*,aa*/) {
	$scope.storagee= $window.localStorage.getItem('admin.admin_email');

	$scope.login=function(email,password){
				
		if(email=="admin" && password=="admin")
		{
			console.log("in")
			$window.localStorage.setItem('admin.admin_email', email );     	

			$window.location="/#/admin_page";
			$window.location.reload()

		}else
		$scope.msg="insert the correct email and password"
	}
	$scope.logout=function(){
		console.log("out")
		$window.localStorage.removeItem('admin.admin_email');
			$window.location="/#/mian";
			$window.location.reload()


	}
});


