'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp').controller('SubmitCouponCtrl', function ($scope) {

        $scope.couponCode = 1234;

        $scope.submitCoupon = function ($http) {
            alert("you entered:" + $scope.couponCode);
            // Simple GET request example :
            $http.get('/someUrl').
              success(function (data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  alert(data);
                  $scope.message = data;
              }).
              error(function (data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  alert(data);
              });
        };

    });;
