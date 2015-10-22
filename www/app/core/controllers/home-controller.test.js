describe("Home controller's behaviours or functions", function(){
	var scope;
	// Mock controller's $scope & Heroes service before each tests are executed	
	// Load the module we want to test
	beforeEach(module('app.core'));
	
	beforeEach(inject(function($rootScope, $controller, Heroes){
		scope = $rootScope.$new();
		homeController = $controller('HomeController', {
			$scope: scope,
			Heroes: Heroes
		});
	}));
	
	it("should have heroes property on the controller's $scope", function(){
		// Assert
		expect(scope.heroes).toBeDefined();
		expect(scope.heroes.length).toBeGreaterThan(0);
		expect(scope.heroes).toEqual(jasmine.arrayContaining(['Crystal Maiden', 'Ogre Magi']));
	});
});