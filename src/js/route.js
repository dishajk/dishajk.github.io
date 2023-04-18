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
				templateUrl: 'src/pages/projects.html'
			})
			.state('tex', {
				url: '/projects#tex',
				templateUrl: 'src/pages/projects.html#tex'
			})
			.state('web', {
				url: '/projects#web',
				templateUrl: 'src/pages/projects.html#web'
			})
			.state('codes', {
				url: '/projects#codes',
				templateUrl: 'src/pages/projects.html#codes'
			})
			.state('origami', {
				url: '/origami',
				templateUrl: 'src/pages/underConstruction.html'
			})
			.state('resources', {
				url: '/resources',
				templateUrl: 'src/pages/resources.html'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'src/pages/fieldnotes.html'
			});
	}
})();
