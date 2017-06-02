appControllers.factory('$mainFactory', function($routeParams, $location, $rootScope, $http){
    
    var getProyects = function(_requestBody) {
        var result = {};
        var url = 'https://webflow-cors.herokuapp.com/webflow/items';
        var requestBody = _requestBody;
        result = $http.post(url, _requestBody);
        $rootScope._proyects = result;
        return result
    }
    return {
       getProyects : getProyects
    };
});