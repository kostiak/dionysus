var module = angular.module('dionysusApp.controllers');

module.controller('AppCtrl', ['$scope', 'User', function ($scope, User) {

    $scope.$watch(function () {
        return User.user;
    }, function(data) {
            $scope.user = data;
    });

}]);