core_module.controller('HomeController', ['$scope', 'Heroes', function($scope, Heroes){
	$scope.heroes = Heroes.get_all();
}]);