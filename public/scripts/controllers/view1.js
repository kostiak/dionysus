var module = angular.module('scotchAuthApp.controllers');

module.controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.data = {message: "I can see view1's scope!"};
}]);