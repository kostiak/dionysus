var module = angular.module('scotchAuthApp.services');

module.factory('User',['$http', '$rootScope', function ($http, $rootScope) {

    var toggleLoggedIn = function (data) {
        $rootScope.loggedIn = (data !== '');
    };

    var User = {
        get: function (callback) {
            $http.get('/api/user').success(function (data) {
                //loggedIn(data !== '');
                toggleLoggedIn(data);
                callback(data);
            });
        },
        login: function (formData, callback) {
            $http.post('/api/login', formData).success(function (data) {
                toggleLoggedIn(data);
                if (typeof callback === 'function'){
                    callback(data);
                }
            });
        },
        logout: function (callback) {
            $http.get('/api/logout').success(function (data) {
                toggleLoggedIn(data);
                callback();
            });
        }
    };

    //check if user is logged in
    if(typeof $rootScope.loggedIn === 'undefined'){
        User.get(function(){});
    }


    return User;
}]);