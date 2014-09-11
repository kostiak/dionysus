angular.module('dionysusApp.filters')
    .filter('reverse', function () {
        return function (text) {
            return text.toString().split('').reverse().join('');
        };
    });