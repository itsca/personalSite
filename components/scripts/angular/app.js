var portFolioApp = angular.module('portFolioApp', [require('angular-animate'), require('angular-route'), 'appControllers']);
portFolioApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
portFolioApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/landing', {
		templateUrl: 'partials/landing.html',
		controller: 'HomeController' 
	}).
	when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'viewsController' 
	}).
	when('/portfolio', {
		templateUrl: 'partials/portfolio.html',
		controller: 'viewsController' 
	}).
	when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'viewsController' 
	}).
	otherwise({
		redirectTo :'/landing'
	});
}]);

portFolioApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);