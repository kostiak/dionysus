var module = angular.module('scotchAuthApp.controllers');

module.controller('RegisterCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    $scope.register = function () {
        $http.post('/api/register', $scope.formData).success(function () {
            console.log('registered!');
        });
    };
}]);