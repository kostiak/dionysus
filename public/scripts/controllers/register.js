var module = angular.module('scotchAuthApp.controllers');

module.controller('RegisterCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
    $scope.formData = {};
    $scope.register = function () {
        User.register($scope.formData,
            function (err) {
                $scope.err = err;
            },
            function () {
                $location.path('/profile');
            });
    };

}]);