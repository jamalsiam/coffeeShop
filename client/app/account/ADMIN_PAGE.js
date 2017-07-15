angular.module('admin_page' , [])

.controller('admin_pageController', function ($scope , $window , $location  ,Item, Order,Bill) {
  $scope.storagee= $window.localStorage.getItem('admin.admin_email');
  if(!$scope.storagee)
   $window.location="/#/mian";
 getSelectedItems();
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


   var lT=[]

   $scope.moveItemToBill=function(tableNumber,piece,price){
    // console.log({tableNumber:tableNumber,piece:piece,price:price})
    
    lT.push({tableNumber:tableNumber,piece:piece,price:price})

    lT.sort( predicateBy("tableNumber") );
    var total=0;
    var pieces=0;
    for(x in lT){
      if(tableNumber==lT[x].tableNumber){
        total+=lT[x].piece*lT[x].price;
        pieces+=(lT[x].piece)*1;
      }
    }
    console.log({tableNumber:tableNumber,piece:pieces,total:total})
    
    var reco=[]
    reco.push({tableNumber:tableNumber,piece:pieces,total:total});
    $scope.listTables=reco;

  }

  function getSelectedItems(){
   Order.getSelectedItem()
   .then(function(i){
    $scope.listOrder=i;
  })
 }
 
 function predicateBy(prop){
   return function(a,b){
    if( a[prop] > b[prop]){
      return 1;
    }else if( a[prop] < b[prop] ){
      return -1;
    }
    return 0;
  }
}
});
