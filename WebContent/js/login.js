//var app = angular.module("logApp", []);

app.controller('Logincontroller',['$scope','$http' ,function($scope,$http) {
   
	var BASE_URL ='http://localhost:808/CollabServer';
    
	$scope.users={
			username : $scope.username,
			password:$scope.password,
			
	}
		$http({
			method : 'POST',
			url : BASE_URL + '/login',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.password='';
			
		}).error(function(data,status,headers,config){
			alert("error");
		});
}]);
			
	
	
	/*$scope.username = "";
      $scope.password = "";
  
});*/