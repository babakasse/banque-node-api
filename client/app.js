var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'ArticlesController',
		templateUrl: 'views/article/articles.html'
	})
	.when('/articles', {
		controller:'ArticlesController',
		templateUrl: 'views/article/articles.html'
	})
	.when('/articles/details/:id',{
		controller:'ArticlesController',
		templateUrl: 'views/article/article_details.html'
	})
	.when('/articles/add',{
		controller:'ArticlesController',
		templateUrl: 'views/article/add_article.html'
	})
	.when('/articles/edit/:id',{
		controller:'ArticlesController',
		templateUrl: 'views/article/edit_article.html'
	})

	.when('/users', {
		controller:'UsersController',
		templateUrl: 'views/user/users.html'
	})
	.when('/users/details/:id',{
		controller:'UsersController',
		templateUrl: 'views/user/user_details.html'
	})
	.when('/users/add',{
		controller:'UsersController',
		templateUrl: 'views/user/add_user.html'
	})
	.when('/users/edit/:id',{
		controller:'UsersController',
		templateUrl: 'views/user/edit_user.html'
	})

	.when('/comptes', {
		controller:'ComptesController',
		templateUrl: 'views/compte/comptes.html'
	})
	.when('/comptes/details/:id',{
		controller:'ComptesController',
		templateUrl: 'views/compte/compte_details.html'
	})
	.when('/comptes/add',{
		controller:'ComptesController',
		templateUrl: 'views/compte/add_compte.html'
	})
	.when('/comptes/edit/:id',{
		controller:'ComptesController',
		templateUrl: 'views/compte/edit_compte.html'
	})

	.when('/login',{
		controller:'UsersController',
		templateUrl: 'views/login.html'
	})

	.when('/register',{
		controller:'UsersController',
		templateUrl: 'views/user/add_user.html'
	})
	.when('/virement',{
		controller:'ComptesController',
		templateUrl: 'views/compte/virement.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});