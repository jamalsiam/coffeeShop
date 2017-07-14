angular.module('u.services', [])



.factory('Item', function ($http) {
  var addItem= function (info) {
    return $http({
      method: 'POST',
      url: '/api/addItem',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };
  var getItem= function () {
    return $http({
      method: 'GET',
      url: '/api/getItem',
      
    }).then(function (res) {
      return res.data;
    });
  };
  return {
    addItem:addItem,
    getItem:getItem
  }

})

.factory('Order', function ($http) {
  var selectItem= function (info) {
    return $http({
      method: 'POST',
      url: '/api/selectItem',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };

  var getSelectedItem= function () {
    return $http({
      method: 'GET',
      url: '/api/getSelectedItem',
    }).then(function (res) {
      return res.data;
    });
  };

  var removeItem=function(info){
    return $http({
      method: 'POST',
      url: '/api/removeItem',
      data: info
    }).then(function (res) {
      return res.data;
    });
  }
  
  return {
    selectItem:selectItem,
    getSelectedItem:getSelectedItem,
    removeItem:removeItem
      }

})

.factory('Bill', function ($http) {
  var getAllTable= function () {
    return $http({
      method: 'GET',
      url: '/api/getAllTables'
    }).then(function (res) {
      return res.data;
    });
  };
  return {
    getAllTable:getAllTable
  }

})
