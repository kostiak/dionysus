var module = angular.module('scotchAuthApp.controllers');

module.controller('LoginCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.formData = {};

    $scope.login = function () {
        User.login($scope.formData);
    };

    $scope.logout = function () {
        User.logout(function () {
            $scope.formData = {};
        });
    };

}]);