var module = angular.module('dionysusApp.controllers');

module.controller('MainViewCtrl', ['$scope', function ($scope) {
    $scope.data = {message: "I can see view1's scope!"};
}]);