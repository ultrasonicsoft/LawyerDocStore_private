'use strict';

mainApp.controller('LoginCtrl', function ($rootScope, $scope, $location) {

    $scope.login = function () {
        $rootScope.loggedInUserName = "User";
        $rootScope.isLoggingRequired = false;
        $location.url('/dashboard');
    }

    $scope.registerUser = function () {

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'directives/register/register.html',
            controller: 'RegisterUserCtrl'
        });
    }
});