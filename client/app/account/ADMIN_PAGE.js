angular.module('admin_page' , [])

.controller('admin_pageController', function ($scope , $window , $location  ,Item, Order,Bill) {
$scope.storagee= $window.localStorage.getItem('admin.admin_email');
if(!$scope.storagee)
 $window.location="/#/mian";
getSelectedItems();
getAllTables();
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

   $scope.removeItem=function(id,added,tableNumber,name,piece,price){
     Order.removeItem({_id:id,
                        added:added,
                        tableNumber:tableNumber,
                        name:name,
                        piece:piece,
                        price:price})
     .then(function(i){
      getSelectedItems();
      getAllTables()

    })
   }
   function getSelectedItems(){
     Order.getSelectedItem()
     .then(function(i){
      console.log(i)
      $scope.listOrder=i;
    })

   }


   function getAllTables(){
    Bill.getAllTable()
    .then(function(dataa){
   // $scope.listTables=dataa;
      var record=dataa;
      var tlist=[];
      var fixedTList=[];
    for (x in record) { 
      var total=0;
      var piece=0;
     
      for(var j = 0; j < record.length; j++) {
        if(record[j].tableNumber==record[x].tableNumber){
        total+=record[j].price *record[j].piece;
        piece+= (record[j].piece*1);
        }

      }

     
      tlist.push({tableNumber:record[x].tableNumber,
              total:total,
              piece:piece})
    
  }

      // console.log(fixedTList)
      //  $scope.listTables=fixedTList;
    })
   }

 });


//record[x].tableNumber