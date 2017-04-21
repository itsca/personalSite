var portFolioApp = angular.module('portFolioApp', [require('angular-animate'), require('angular-route')]);
portFolioApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/landing', {
		templateUrl: 'partials/landing.html',
		controller: '' 
	}).
	otherwise({
		redirectTo :'/landing'
	});
}]);