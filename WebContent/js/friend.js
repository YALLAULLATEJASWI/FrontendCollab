var app=angular.module('allusers',[]);
app.controller('alluserctrl',['$scope','$http',function($scope,$http){
	var BASE_URL = 'http://localhost:808/CollabServer';
	$scope.getAllUsers= function() {
		console.log("usersctrl")
		
		$http({
			
			method : 'GET',
			url : BASE_URL+'/users'			
		}).success(function(data, status, headers, config) {
			$scope.users=data;
			console.log("get users");
			//alert(data); 
		})
	};
	console.log("sending request");
	$scope.sendrequest=function(fid){
		console.log("request");
		$http({
			method:'POST',
			url:BASE_URL+'/sendrequest/'+fid
		}).success(function(data,status,headers,config){
			
		}).error(function(data,status,headers,config){
			alert("Error");
		})
	};

/*$scope.myfriends=function(fid){
	$http({
		method:'GET',
		url:BASE_URL+'/myfriends/'+fid
	})
};

$scope.acceptfriend=function(fid)
{
$http({
	method:'POST',
	url:BASE_URL+'/acceptrequest/'+fid
})	
};

$scope.rejectfriend=function(fid)
{
$http({
	method:'POST',
	url:BASE_URL+'/rejectrequest/'+fid
})
}*/
}])


	
	
