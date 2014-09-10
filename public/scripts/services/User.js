var module = angular.module('dionysusApp.services');

module.factory('User', ['$http', '$rootScope', function ($http, $rootScope) {

    //setting up a watch on when user changes to indicate whether it is logged in
    /*
     $rootScope.$watch(function () {
     console.log('watching you, ' + User.user);
     return User.user;
     }, function () {
     $rootScope.loggedIn = (User.user !== '');
     });
     */

    var User = {
        user: '',
        get: function (callback) {
            $http.get('/api/user').success(function (data) {
                User.user = data;
                if (data !== '') {
                    $rootScope.loggedIn = true;
                }
                if (typeof callback === 'function') {
                    callback(data);
                }
            }).error(function (err) {
                console.log(err);
            });
        },
        register: function (formData, errorCallback, successCallback) {
            $http.post('/api/register', formData).success(function (data) {
                User.user = data;
                if (data !== '') {
                    $rootScope.loggedIn = true;
                }
                if (typeof successCallback === 'function') {
                    successCallback();
                }
            }).error(function (data, status) {
                if (status == '400') {
                    errorCallback('Email is in the wrong format');
                } else if (status == '401') {
                    errorCallback('Email already exists');
                }
            });
        },
        login: function (formData, errorCallback, successCallback) {
            $http.post('/api/login', formData).success(function (data) {
                User.user = data;
                if (data !== '') {
                    $rootScope.loggedIn = true;
                }
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            }).error(function (data, status) {
                if (status == '400') {
                    errorCallback('Email is in the wrong format');
                } else if (status == '401') {
                    errorCallback('Wrong email or password');
                }
            });
        },
        logout: function (callback) {
            $http.get('/api/logout').success(function () {
                User.user = '';
                $rootScope.loggedIn = false;
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