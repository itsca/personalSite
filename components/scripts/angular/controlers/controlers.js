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
		});
	initScrolls();

	//events
	//======
	/*jQuery('.filter').click(function(e){
		var thisFilter = e.target;
		if (!jQuery(thisFilter).hasClass("active")) {
			console.log("doesnt have it");
			jQuery(thisFilter).addClass("active");
		}
	});*/
})
.controller('navController', function navController($scope, $location) {
	$scope.isActivePath = function (path) {
      return $location.path() == path;
    };
});