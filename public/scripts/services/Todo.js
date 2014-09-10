var module = angular.module('dionysusApp.services');

module.factory('Todo', ['$http', '$rootScope', function ($http, $rootScope) {
    var Todo = {
        get: function (callback) {
            if ($rootScope.loggedIn) {
                $http.get('/api/todo').success(function (data) {
                    callback(data);
                });
            } else {
                callback({});
            }
        },
        add: function (formData, callback) {
            if ($rootScope.loggedIn) {
                $http.post('/api/todo', formData).success(function (data) {
                    callback(data);
                }).error(function (err) {
                    console.log(err);
                });
            }
        },
        delete: function (_id, callback) {
            if ($rootScope.loggedIn) {
                $http.delete('/api/todo/' + _id).success(function (data) {
                    callback(data);
                });
            }
        }
    };

    return Todo;
}]);