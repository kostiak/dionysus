var module = angular.module('dionysusApp.controllers');

module.controller('MainViewCtrl', ['$scope', '$http', 'User', function ($scope, $http, User) {
    $scope.formData = {};

    $scope.data = {message: "I can see view1's scope!"};

    $scope. submit = function () {
        $http.post('/api/todo', $scope.formData).success(function () {
            User.get();
            $scope.formData = {};
        });
    };
}]);