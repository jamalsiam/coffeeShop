angular.module('u.services', [])


.factory('Item', function ($http) {
  var addItem= function (info) {
  //console.log(signup);
    return $http({
      method: 'POST',
      url: '/api/addItem',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };
  return {
    addItem:addItem
  }

})
