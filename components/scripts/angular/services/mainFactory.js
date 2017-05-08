appControllers.factory('$mainFactory', function($routeParams, $location, $rootScope){
    var webflow = new Webflow({ token: "b9b312039034d375b2916a048480ca9bf13e8b9cd6dded80778e21399a6c3137" });

    //Webflow API Requests
    // Promise <[ Item ]>
    var sites = webflow.sites();
    var collections = webflow.collections({ siteId: '5900f7ae2759113134291ff5' });
    var getProyects = webflow.items({ collectionId: '5900f806c66e3c7cf167d4da' });
    return {
       sites : sites,
       collections : collections,
       //items : items,
       getProyects : getProyects
    };
});