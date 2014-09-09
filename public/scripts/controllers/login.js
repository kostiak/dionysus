var module = angular.module('scotchAuthApp.controllers');

module.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    $scope.data = {email: '', password: ''};
    $scope.login = function () {
        $http.post('/api/login', $scope.formData).success(function (data) {
            $scope.data = data;
        });
    };

    $scope.logout = function () {
        $http.get('/api/logout').success(function () {
            $scope.data = {};
            $scope.formData = {};
        });
    };

    $http.get('/api/user').success(function (data) {
        $scope.data = data;
    });
}]);