'use strict';

mainApp.controller('LoginCtrl', function ($rootScope, $scope, $location, $http) {
    
    $scope.login = function () {
        //$rootScope.loggedInUserName = "User";
        //$rootScope.isLoggingRequired = false;
        //$location.url('/dashboard');
        alert("trying to login");
        $http.post('http://localhost:1337/login', {
            username: $scope.email,
            password: $scope.password,
        })
    .success(function (user) {
            // No error: authentication OK
            //myService.set(user.name);
            alert("success");

            //$rootScope.message = 'Authentication successful!';
            //$rootScope.isLoggingRequired = false;
            //$rootScope.loggedInUserName = myService.get();
            //$location.url('/clients');
        })
    .error(function () {
            // Error: authentication failed
            alert("error");
            //$rootScope.message = 'Authentication failed.';
            //$location.url('/login');
        });
    }
    
    $scope.registerUser = function () {
        
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'directives/register/register.html',
            controller: 'RegisterUserCtrl'
        });
    }
});