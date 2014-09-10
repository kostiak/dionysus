var module = angular.module('dionysusApp.controllers');

module.controller('MainViewCtrl', ['$scope', '$http', 'Todo', function ($scope, $http, Todo) {
    $scope.formData = {};

    $scope.data = {message: "I can see view1's scope!"};

    $scope.getTodos = function () {
        Todo.get(function (todos) {
            $scope.todos = todos;
        });
    };

    $scope.submit = function () {
        Todo.add($scope.formData, function (todos) {
            $scope.todos = todos;
            $scope.formData = {};
        });
    };

    $scope.delete = function (_id) {
        Todo.delete(_id, function (todos) {
            $scope.todos = todos;
        });
    };

    $scope.$on("$routeChangeSuccess", function () {
        $scope.getTodos();
    });
}]);