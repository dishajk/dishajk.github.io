(function (){
	angular.module('djk', ['ui.router']);

	angular.module('djk')
	.config(routesConfig);

	routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'src/pages/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'src/pages/about.html'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'src/pages/contact.html'
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'src/pages/updating.html'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'src/pages/underConstruction.html'
			})
			.state('resources', {
				url: '/resources',
				templateUrl: 'src/pages/resources.html'
			});
	}
})();
