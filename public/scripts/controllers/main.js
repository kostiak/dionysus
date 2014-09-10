var module = angular.module('dionysusApp.controllers');

module.controller('MainViewCtrl', ['$scope', 'Todo', 'User', function ($scope, Todo, User) {
    $scope.formData = {};

    $scope.getTodos = function () {
        Todo.get(function (todos) {
            $scope.todos = todos;
        });
    };

    $scope.submit = function () {
        if((typeof $scope.formData.text !== 'undefined') && $scope.formData.text !== '') {
            Todo.add($scope.formData, function (todos) {
                $scope.todos = todos;
                $scope.formData = {};
            });
        }
    };

    $scope.delete = function (_id) {
        Todo.delete(_id, function (todos) {
            $scope.todos = todos;
        });
    };

    $scope.$on("$routeChangeSuccess", function () {
        User.get(function () {
            $scope.getTodos();
        });
    });
}]);