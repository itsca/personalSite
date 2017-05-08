var appControllers = angular.module("appControllers", []);

appControllers.controller('viewsController', function viewsController($scope, $mainFactory) {
  console.log("controller");
	var initScrolls = function() {
		scrolls = document.getElementsByClassName("customScroll");
		for (var i = 0; i < scrolls.length; i++) {
			Ps.initialize(scrolls[i], {
			  suppressScrollX: true
			});
		};
	};
	$mainFactory.getProyects.then(function(data) {
		    $scope.proyects = data.items;
		    $scope.$apply();
		    console.log($scope.proyects);
			console.log("mixing");
			if (jQuery('#portfolio-list').mixItUp('isLoaded')) {
				jQuery('#portfolio-list').mixItUp('destroy');
				jQuery('#portfolio-list').mixItUp();
			} else {
				jQuery('#portfolio-list').mixItUp();
			}
			//jQuery('#portfolio-list').mixItUp();
			/**/
		});
	initScrolls();
});