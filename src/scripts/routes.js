comixApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', { controller:'LoginController', templateUrl: 'modules/login/login.tpl.html' });
    $routeProvider.when('/comix', { controller: 'ComixController', templateUrl: 'modules/comix/comix.tpl.html' });

    $routeProvider.otherwise({redirectTo:'/'});
}]);
