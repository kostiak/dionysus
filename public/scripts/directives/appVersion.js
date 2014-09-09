var module = angular.module('dionysusApp.directives');

module.directive('appVersion', ['version', function (version) {
    return function (scope, elem) {
        elem.text(version);
    };
}]);