//var app = angular.module('registerApp',[]);
app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:808/CollabServer';
console.log("hello");
 $scope.submit = function() {
  console.log("done");
  $scope.users = { 
   
   username : $scope.username,
   mail: $scope.mail,
   password:$scope.password,
   mobile:$scope.mobile,
   address:$scope.address,
   dob:$scope.dob,
   gender:$scope.gender,
   
  }
  $http({
   method : 'POST',
   url : BASE_URL + '/register',
   data : $scope.users
  }).success(function(data, status, headers, config) {
   $scope.username='';
   $scope.mail='';
   $scope.password='';
   $scope.mobile='';
   $scope.address='';
   $scope.dob='';
   $scope.gender='';
   
  
  }).error(function(data,status,headers,config){
   alert("error");
  });
 };
}]);