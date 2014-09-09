var module = angular.module('dionysusApp.filters');

module.filter('reverse', function () {
    return function (text) {
       return text.toString().split('').reverse().join('');
    };
});