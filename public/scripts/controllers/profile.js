var module = angular.module('dionysusApp.controllers');

module.controller('ProfileCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
    if(!$scope.loggedIn) {
        $location.path('/login');
    }

    User.get(function (data) {
        $scope.user = data;
    });

    $scope.logout = function () {
        User.logout(function () {
            $location.path('/');
        });
    };
}]);