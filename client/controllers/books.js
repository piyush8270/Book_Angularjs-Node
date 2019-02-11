var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('Looking Under The Hood, Thats Great! :)');

	$scope.getBooks = function(){ // View All Books
		$http.get('/api/books').success(function(response){
			$scope.books = response;
		});
	}
	$scope.getBook = function(){
		var id = $routeParams.id; // Gets book with perticular :id
		$http.get('/api/books/'+id).success(function(response){
			$scope.book = response; 
		});
	}
	$scope.addBook = function(){ 
		console.log($scope.book); // Add Book API
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href='#/books'; // jumps to default page
		});
	}
	$scope.updateBook = function(){
		var id = $routeParams.id;  // Update Book with perticular :id
		$http.put('/api/books/'+id, $scope.book).success(function(response){
			window.location.href='#/books'; // jumps to default page
		});
	}
	$scope.removeBook = function(id){  // Remove the book with perticular :id
		$http.delete('/api/books/'+id).success(function(response){
			window.location.href='#/books'; // jumps to default page
		});
	}
}]);