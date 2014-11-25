angular.module('dionysusApp.directives')
    .directive('appVersion', ['version', function (version) {
        return function (scope, elem) {
            elem.text(version);
        };
    }]);