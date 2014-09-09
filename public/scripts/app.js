angular.module('scotchAuthApp.controllers', []);
angular.module('scotchAuthApp.directives', []);
angular.module('scotchAuthApp.filters', []);
angular.module('scotchAuthApp.services', []);

var app = angular.module('scotchAuthApp', [
    'ngRoute',
    'scotchAuthApp.controllers',
    'scotchAuthApp.directives',
    'scotchAuthApp.filters',
    'scotchAuthApp.services'
]);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'partials/view1.html',
            controller: 'View1Ctrl'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        })
        .otherwise({
            redirectTo: '/view1'
        });
}]);