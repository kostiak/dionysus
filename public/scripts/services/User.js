var module = angular.module('scotchAuthApp.services');

module.factory('User', ['$http', '$rootScope', function ($http, $rootScope) {

    //setting up a watch on when user changes to indicate whether it is logged in
    $rootScope.$watch(function () {
        return User.user;
    }, function () {
        $rootScope.loggedIn = (User.user !== '');
    });

    var User = {
        user: '',
        get: function (callback) {
            $http.get('/api/user').success(function (data) {
                User.user = data;
                if (typeof callback === 'function') {
                    callback(data);
                }
            });
        },
        register: function (formData, callback) {
            $http.post('/api/register', formData).success(function (data) {
                User.user = data;
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },
        login: function (formData, callback) {
            $http.post('/api/login', formData).success(function (data) {
                User.user = data;
                if (typeof callback === 'function') {
                    callback(data);
                }
            });
        },
        logout: function (callback) {
            $http.get('/api/logout').success(function () {
                User.user = '';
                if (typeof callback === 'function') {
                    callback();
                }
            });
        }
    };

    //check if user is logged in
    if (typeof $rootScope.loggedIn === 'undefined') {
        User.get();
    }


    return User;
}]);