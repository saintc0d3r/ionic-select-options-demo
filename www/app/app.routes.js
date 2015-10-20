app_module.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,			
			templateUrl: 'app/core/views/_layout.html',
			controller: 'HomeController'
		})
		.state('app.main', {
			url: '/main',
			views: {
				'main_view': {
					templateUrl: 'app/core/views/main.html',
					controller: 'HomeController'
				}
			}
		});
	
	$urlRouterProvider.otherwise('/app/main');
});