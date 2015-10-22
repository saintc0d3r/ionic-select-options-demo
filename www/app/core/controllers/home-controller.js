angular.module('app.core')
	.controller('HomeController', ['$scope', 'Heroes', function($scope, Heroes){
		$scope.heroes = Heroes.get_all();
	}]);