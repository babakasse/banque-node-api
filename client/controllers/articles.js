var myApp = angular.module('myApp');

myApp.controller('ArticlesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ArticlesController loaded...');

	$scope.getArticles = function(){
		$http.get('/api/articles').success(function(response){
			$scope.articles = response;
		});
	}

	$scope.getArticle = function(){
		var id = $routeParams.id;
		$http.get('/api/articles/'+id).success(function(response){
			$scope.article = response;
		});
	}

	$scope.addArticle = function(){
		console.log($scope.article);
		$http.post('/api/articles/', $scope.article).success(function(response){
			window.location.href='#/articles';
		});
	}

	$scope.updateArticle = function(){
		var id = $routeParams.id;
		$http.put('/api/articles/'+id, $scope.article).success(function(response){
			window.location.href='#/articles';
		});
	}

	$scope.removeArticle = function(id){
		$http.delete('/api/articles/'+id).success(function(response){
			window.location.href='#/articles';
		});
	}
}]);