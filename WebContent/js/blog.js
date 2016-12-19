/*

Simple blog front end demo in order to learn AngularJS - You can add new posts, add comments, and like posts.



(function(){
  var app = angular.module('blogApp',[]);
  
  app.controller('BlogController', ['$http', function($http){
    
    var blog = this;
    blog.title = "AngularJS Blog App";
    
    blog.posts = {};
    $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
      blog.posts = data;
    });
    
    blog.tab = 'blog';
    
    blog.selectTab = function(setTab){
      blog.tab = setTab;
      console.log(blog.tab)
    };
    
    blog.isSelected = function(checkTab){
      return blog.tab === checkTab;
    };
    
    blog.post = {};
    blog.addPost = function(){
      blog.post.createdOn = Date.now();
      blog.post.comments = [];
      blog.post.likes = 0;
      blog.posts.unshift(this.post);
      blog.tab = 0;
      blog.post ={};
    };   
    
  }]);
  
  app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });
 
})();*/


var blogapp = angular.module('blogApp',[]);
blogapp.controller('blogcntrl', [ '$scope', '$http', '$location','$rootScope',function($scope, $http,$location,$rootScope) {
	var BASE_URL = 'http://localhost:808/CollabServer';
	console.log("blog");
	$scope.getAllBlogs= function() {
		console.log("get all blogs")
		$http({
			method : 'GET',
			url : BASE_URL+'/blog'
		}).success(function(data, status, headers, config) {
			$scope.blogs=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	};
	$scope.submit = function() {
		console.log("create blog")
		
		$scope.blog = {	
			id:$scope.id,
			title : $scope.title,
			userid:$scope.userid,
			doc:$scope.doc,
			content : $scope.content,
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createblog',
			data : $scope.blog
		}).success(function(data, status, headers, config) {
			$scope.id='';
			$scope.title='';
			$scope.userid='';
			$scope.doc='';
			$scope.content='';
			$scope.getAllBlogs();
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
	$scope.deleteblog=function(id){
		$http({
			method:'DELETE',
		url:BASE_URL+'/deleteblog/'+id
		}).success(function(data,status,headers,config){
			$scope.getAllBlogs();
		})
	};
	$scope.editblog=function(id,title,content){
		$scope.id=id;
		$scope.title=title;
		$scope.content=content;
		console.log('edited blog');
	}
	$scope.getblog=function(id){
		  
		  console.log("iblog")
		  $http({
		   method: "GET",
		   url:BASE_URL+'/iblog/'+id,
		  }).success(function(data,status,headers,config){
		   $location.path('/iblog');
		   $rootScope.individualblogs=data;
		   console.log(data)
		  }).error(function(data, status, headers, config) {
		   alert("Error");
		  });
		 }
	$scope.like=function(id){
		$http({
			method : 'POST',
			url : BASE_URL + '/likeblog/'+id,
		}).success(function(data, status, headers, config) {
			alert("success")
			console.log('liked');
		})
		
	}
	        }]);