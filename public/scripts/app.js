angular.module('dionysusApp.controllers', []);
angular.module('dionysusApp.directives', []);
angular.module('dionysusApp.filters', []);
angular.module('dionysusApp.services', []);

var app = angular.module('dionysusApp', [
    'ngRoute',
    'ui.gravatar',
    'dionysusApp.controllers',
    'dionysusApp.directives',
    'dionysusApp.filters',
    'dionysusApp.services'
]);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'partials/main.html',
            controller: 'MainViewCtrl'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        }).when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterCtrl'
        }).when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl'
        })
        .otherwise({
            redirectTo: '/view1'
        });
}]);