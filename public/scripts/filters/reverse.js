var module = angular.module('scotchAuthApp.filters');

module.filter('reverse', function () {
    return function (text) {
       return text.toString().split('').reverse().join('');
    };
});