var app = angular.module('myApp',['ngRoute','blogApp','iforumApp','iblogApp','forumApp','allusers','loginApp','registerApp','ngCookies','chatApp']);

app.config(function($routeProvider,$locationProvider) {
  $routeProvider
  
  .when('/Index1', {
      templateUrl : 'Index1.html',
      controller:'LoginController',
  	controllerAs:'vm'
  })

   .when('/blog', {
    templateUrl : 'html/blog.html',
    controller  : 'blogcntrl'
 })
  .when('/iblog',{
    	templateUrl: 'html/iblog.html',
	controller: 'commentsblog'
    })
 
 .when('/login',{
    	templateUrl:'html/login.html',
    	controller:'LoginController',
    	controllerAs:'vm'
 })
 .when('/register', {
    templateUrl : 'html/register.html',
    controller  : 'Registercontroller'
 })
 .when('/UserProfile', {
    templateUrl : 'html/UserProfile.html',
    controller  : 'Registercontroller'
 })
.when('/chat',{
    	templateUrl: 'html/chat.html',
    	controller: "chatController",
    })
 .when('/forum', {
    templateUrl : 'html/forum.html',
    controller  : 'Forumcontroller'
 })
  .when('/iforum',{
    	templateUrl: 'html/iforum.html',
	controller: 'commentsforum'
    })
 .when('/friend', {
    templateUrl : 'html/friend.html',
    controller  : 'alluserctrl'
    	
 })
  .when('/allfriends', {
    templateUrl : 'html/allfriends.html',
    controller  : 'allfriendsctrl'
    	
 })
 .when('/nwrequests', {
    templateUrl : 'html/nwrequests.html',
    controller  : 'allfriendsctrl'
    	
 })
 

  .otherwise({redirectTo: '/'
	  })
;
  console.log("route");    });
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
  
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register','/Index1','/jobs']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}
