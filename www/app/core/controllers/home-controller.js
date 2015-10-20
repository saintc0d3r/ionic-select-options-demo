app_module.controller('HomeController', function($scope, Heroes){
	$scope.heroes = Heroes.get_all();
});