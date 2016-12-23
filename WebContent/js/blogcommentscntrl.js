
var app = angular.module('iblogApp',[]);

app.controller('commentsblog', [ '$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	var BASE_URL = 'http://localhost:808/CollabServer';
	$scope.iblog=$rootScope.individualblogs;

	$scope.submit=function(id){
		console.log("individualblogs");

		$scope.blogcomment={
				comment:$scope.comment
		}
		$http({
			method:'POST',
			url:BASE_URL+'/commentblog/'+id ,
			data:$scope.blogcomment
		}).success(function(data, status, headers, config) {
			$scope.comment='';
		})
	}
	$scope.getcomment=function(id){
		$http({
			method:'GET',
			url:BASE_URL+'/getblogcomment/'+id
		}).success(function(data,status,headers,config){
			$scope.comments=data;
		})
	}
	$scope.getuser=function(id){
		$http({
			method: 'GET',
			url: BASE_URL+'/oneuser/'+id
		}).success(function(data,status,headers,config){
			$scope.users=data;
		})
	}
}])