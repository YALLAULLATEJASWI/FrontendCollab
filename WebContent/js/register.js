var app = angular.module('registerApp',[]);
app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:808/CollabServer';
console.log("hello");
 $scope.submit = function() {
  console.log("done");
  $scope.users = { 
   
   username : $scope.username,
   mail: $scope.mail,
   role: $scope.role,
   status: $scope.status,
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
   $scope.role='',
   $scope.status='',
   $scope.password='';
   $scope.mobile='';
   $scope.address='';
   $scope.dob='';
   $scope.gender='';
   
  
  }).error(function(data,status,headers,config){
   alert("error");
  });
 };
 $scope.currentuser=function(){
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser'
		}).success(function(data,status,headers,config){
			console.log("inside oneuser");
			$scope.oneuser=data;
			$scope.img = data.image
		})
	};
	$scope.uploadFile = function(files) {
	    var image = new FormData();
	    //Take the first selected file
	    image.append("file", files[0]);

	    $http.post(BASE_URL+'/imageUpload', image, {
	        withCredentials: true,
	        headers: {'Content-Type': undefined },
	        transformRequest: angular.identity
	    }).success(function(data, status, headers, config) {
			alert("success")
			 $scope.reloadPage = function()                                                
                {
                  $window.location.reload();
                }
			console.log(image)
		}).error(function(data, status, headers, config) {
			alert("error")
		});

	};
	$(function() {
		   console.log("edit")
		    $('#profile-image1').on('click', function() {
		        $('#profile-image-upload').click();
		    });
		});       
}]);