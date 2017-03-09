var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/book/books.html'
	})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/book/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/book/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/book/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/book/edit_book.html'
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
	.when('/user/edit/:id',{
		controller:'UsersController',
		templateUrl: 'views/user/edit_user.html'
	})

	.when('/login',{
		controller:'AuthentificationController',
		templateUrl: 'views/authentification/login.html'
	})

	.when('/register',{
		controller:'AuthentificationController',
		templateUrl: 'views/authentification/register.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});