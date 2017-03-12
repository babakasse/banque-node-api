var myApp = angular.module('myApp');

myApp.controller('ComptesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ComptesController loaded...');

	$scope.getComptes = function(){
		$http.get('/api/comptes').success(function(response){
			$scope.comptes = response;
		});
	}

	$scope.getCompte = function(){
		var id = $routeParams.id;
		$http.get('/api/comptes/'+id).success(function(response){
			$scope.compte = response;
		});
	}

	$scope.addCompte = function(){
		console.log($scope.compte);
		$http.post('/api/comptes/', $scope.compte).success(function(response){
			window.location.href='#/comptes';
		});
	}

	$scope.updateCompte = function(){
		var id = $routeParams.id;
		$http.put('/api/comptes/'+id, $scope.compte).success(function(response){
			window.location.href='#/comptes';
		});
	}

	$scope.removeCompte = function(id){
		$http.delete('/api/comptes/'+id).success(function(response){
			window.location.href='#/comptes';
		});
	}
/*
	$scope.virementComptes = function(compte1, compte2){
		$http.put('/api/comptes/'+compte1);
		$http.put('/api/comptes/'+compte2).success(function(response){
			window.location.href='#/comptes';
		});
	}*/
}]);