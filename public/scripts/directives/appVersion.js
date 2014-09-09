var module = angular.module('scotchAuthApp.directives');

module.directive('appVersion', ['version', function (version) {
    return function (scope, elem) {
        elem.text(version);
    };
}]);