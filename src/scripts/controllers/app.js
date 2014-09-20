angular.module('dionysusApp.controllers')
    .controller('AppCtrl', ['$scope', 'User', '$location', function ($scope, User, $location) {

        $scope.$watch(function () {
            return User.user;
        }, function (data) {
            $scope.user = data;
            //console.log('User.user changed, ' + data.email);
        });

        $scope.logout = function () {
            User.logout(function () {
                $location.path('/');
            });
        };

    }]);