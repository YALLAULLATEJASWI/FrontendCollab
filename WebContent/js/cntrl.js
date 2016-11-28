var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/blog', {
    templateUrl : 'html/blog.html',
    controller  : 'BlogController'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'Logincontroller'
 })
 .when('/register', {
    templateUrl : 'html/register.html',
    controller  : 'Registercontroller'
 })
.when('/chat', {
    templateUrl : 'html/chat.html',
    controller  : 'Chatcontroller'
 })

  .otherwise({redirectTo: '/'});
});

app.controller("Registercontroller", function ($scope) {  
});

app.controller("Logincontroller", function ($scope) {
 
});
app.controller("BlogController", function ($scope) {
	 
});
app.controller('myController',function($scope){
	$scope.message = "volvo";
});
