angular.module('dionysusApp.services')
    .factory('Todo', ['$http', '$rootScope', function ($http, $rootScope) {

        var Todo = {};

        Todo.get = function (callback) {
            if ($rootScope.loggedIn) {
                $http.get('/api/todo').success(function (data) {
                    callback(data);
                });
            } else {
                callback({});
            }
        };

        Todo.add = function (formData, callback) {
            if ($rootScope.loggedIn) {
                $http.post('/api/todo', formData).success(function (data) {
                    callback(data);
                }).error(function (err) {
                    console.log(err);
                });
            }
        };

        Todo.edit = function (_id, editData, callback) {
            if ($rootScope.loggedIn) {
                $http.post('/api/todo/' + _id, editData).success(function (data) {
                    callback(data);
                }).error(function (err) {
                    console.log(err);
                });
            }
        };

        Todo.delete = function (_id, callback) {
            if ($rootScope.loggedIn) {
                $http.delete('/api/todo/' + _id).success(function (data) {
                    callback(data);
                });
            }
        };

        return Todo;
    }]);