var module = angular.module('scotchAuthApp.controllers');

module.controller('LoginCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
    $scope.formData = {};

    $scope.login = function () {
        User.login($scope.formData, function () {
            $location.path('/profile');
        });
    };

    $scope.logout = function () {
        User.logout(function () {
            $scope.formData = {};
        });
    };

}]);