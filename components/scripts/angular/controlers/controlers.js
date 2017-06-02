var appControllers = angular.module("appControllers", []);

appControllers.controller('viewsController', function viewsController($scope, $mainFactory) {
	var initScrolls = function() {
		scrolls = document.getElementsByClassName("customScroll");
		for (var i = 0; i < scrolls.length; i++) {
			Ps.initialize(scrolls[i], {
			  suppressScrollX: true
			});
		};
	},
	_TL = new TimelineLite;

	$scope.openModal = function(id) {
		jQuery.each($scope.proyects, function(i, proyect) {
			if (id === proyect._id) {
				$scope.currProyect = proyect;
				$scope.currProyectUrl = proyect.link;
			} 
	    });
		// Sequence.
		jQuery(document.body).addClass("body-hidden");
	    _TL.insert(TweenLite.to (jQuery('#main-head') , 0.2, {autoAlpha:0}));
	    _TL.insert(TweenLite.to (jQuery('#portfolio-modal') , 0.3, {autoAlpha:1}));
	    _TL.insert(TweenLite.to (jQuery('#clip-shape') , 1.3, {
		      attr: {
		        r: "100%"
		      },
		      ease: Expo.easeInOut
		    }));
	    _TL.insert(TweenLite.fromTo (jQuery('#portfolio-modal-content') , 0.3, {y: 200}, {y: -3,ease: Expo.easeInOut}));
	    
	    return _TL.play();
	}
	$scope.closeModal = function() {
		_TL.eventCallback('onReverseComplete', function() {
	      jQuery(document.body).removeClass("body-hidden");
	    });
	    return _TL.reverse();
	}

	$mainFactory.getProyects.then(function(data) {
		    $scope.proyects = data.items;
		    $scope.$apply();
		    console.log($scope.proyects);
			if (jQuery('#portfolio-wrap').mixItUp('isLoaded')) {
				jQuery('#portfolio-wrap').mixItUp('destroy');
				jQuery('#portfolio-wrap').mixItUp();
			} else {
				jQuery('#portfolio-wrap').mixItUp();
			}
		});
	//initScrolls();
})
.controller('navController', function navController($scope, $location) {
	var header = jQuery('#main-head');

	$scope.isActivePath = function (path) {
      return $location.path() == path;
    };

    jQuery(window).scroll(function() {
		if (jQuery(window).scrollTop() >= 200) {
			if (!jQuery(header).hasClass('header--open')) {
				jQuery(header).addClass('header--open');
			}
		}else {
			jQuery(header).removeClass('header--open');
		};
	});
});