// Route for all page when url go to page
angular.module('user',
  ['menu',
   'locations',
   'main',
   'order',
   'index',
   'admin_page',
   'u.services',
   'ngRoute'
	])
.config(function($routeProvider, $httpProvider){
  $routeProvider
	.when('/main', {
      templateUrl: 'app/account/main.html',
      controller:  'mainController'
    })
  .when('/', {
      templateUrl: 'app/index.html',
      controller:  'indexController'
    })
    .when('/menu', {
      templateUrl: 'app/account/menu.html',
      controller:  'menuController'
    })     
  .when('/locations', {
      templateUrl: 'app/account/locations.html',
      controller:  'locationsController'
    })
  .when('/order', {
      templateUrl: 'app/account/order.html',
      controller:  'orderController'
    })
   .when('/admin_page', {
      templateUrl: 'app/account/admin_page.html',
      controller:  'admin_pageController'
    })

    .otherwise({
      redirectTo:'/main'
    })
})