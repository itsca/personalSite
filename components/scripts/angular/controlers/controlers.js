var appControllers = angular.module("appControllers", []);

appControllers.controller('viewsController', function viewsController($scope, $mainFactory, $timeout, $rootScope, $http) {
	var initScrolls = function() {
		scrolls = document.getElementsByClassName("customScroll");
		for (var i = 0; i < scrolls.length; i++) {
			Ps.initialize(scrolls[i], {
			  suppressScrollX: true
			});
		};
	},
	_TL = new TimelineLite,
	webflowRequestBody = {
    	"apiToken" : "b9b312039034d375b2916a048480ca9bf13e8b9cd6dded80778e21399a6c3137",
    	"collectionId" : "5900f806c66e3c7cf167d4da"
	};

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

	$scope.sendCForm = function() {
		var nameVal = jQuery("#nameField").val(),
			emailVal = jQuery("#mailField").val(),
			messageVal = jQuery("#subjectField").val();
		$http.post('https://formspree.io/itscae@gmail.com', {name: nameVal, email: emailVal, message: messageVal}).then(function(){jQuery("#form-submitted-correctly").show()}, function(response){console.log("email error" + response)});
	}
	$scope.closeCModal = function() {
		jQuery("#nameField").val("");
		jQuery("#mailField").val("");
		jQuery("#subjectField").val("");
		jQuery("#form-submitted-correctly").hide();
	}
	
	$mainFactory.getProyects(webflowRequestBody).then(function(response){
			$scope.proyects = response.data.items;
            $timeout(function(){
            	$scope.proyects = response.data.items;
            	$scope.$apply();
            	console.log($scope.proyects);
            	//Check for contact URL
            	jQuery('#loader-icon').hide();
				if (jQuery('#portfolio-wrap').mixItUp('isLoaded')) {
					jQuery('#portfolio-wrap').mixItUp('destroy');
					jQuery('#portfolio-wrap').mixItUp();
				} else {
					jQuery('#portfolio-wrap').mixItUp();
				}
			}, 20);
          });
	/*Button-actions*/
	jQuery('#submitted-correctly-closer').click(function(event) {
	    jQuery('#form-submitted-correctly').hide();
	});
	
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