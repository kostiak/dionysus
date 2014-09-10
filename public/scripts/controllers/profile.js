var module = angular.module('dionysusApp.controllers');

module.controller('ProfileCtrl', ['$scope', '$location', 'User', 'Todo', function ($scope, $location, User, Todo) {
    if (!$scope.loggedIn) {
        $location.path('/login');
    }

    Todo.get(function (todos) {
        $scope.todos = todos;
    });

    User.get(function (data) {
        $scope.user = data;
    });

}]);