angular.module('admin_page' , [])

.controller('admin_pageController', function ($scope , $window , $location  ,Item) {

$scope.storagee= $window.localStorage.getItem('admin.admin_email');
	if(!$scope.storagee)
	$window.location="/#/mian";


    $scope.stepsModel = "";
    $scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
             var file = files[i];
                 var reader = new FileReader();
                 reader.onload = $scope.imageIsLoaded; 
                 reader.readAsDataURL(file);
         }
    }

    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
            $scope.stepsModel=e.target.result;
        });
        console.log($scope.stepsModel);
    }
    $scope.addItem=function(image,name,price){
    	Item.addItem({image:image,
    				name:name,
    				price:price})
    	.then(function(i){
    		$scope.msg="item added";
    		$scope.stepsModel = "";
    		$scope.itemName="";
    		$scope.price="";
    	})
    }





});


