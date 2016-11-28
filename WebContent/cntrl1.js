var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/blog', {
    templateUrl : 'html/blog.html',
    controller  : 'blogcntrl'
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

