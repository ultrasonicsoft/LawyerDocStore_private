'use strict';
// Declare app level module which depends on views, and components
var mainApp = angular.module('myApp',
                            [   'ngRoute',
                                'ui.bootstrap',
                                'ui.grid',
                                'ui.grid.resizeColumns',
                                'ui.grid.selection',
                                'ui.grid.pinning',
                                'ui.grid.autoResize',
                                'ui.grid.selection',
                                'ui.grid.exporter',
                                'ui.grid.grouping'])
                            .controller('WebShopCtrl',
                                function ($rootScope, $scope, $modal) {

                                    $rootScope.isLoggingRequired = true;
                                });

mainApp.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'directives/carousel/carousel.html',
            controller: 'CarouselCtrl'
        })
        .when('/dashboard', {
            templateUrl: 'directives/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .when('/search-document', {
            templateUrl: 'directives/search-document/search-document.html',
            controller: 'SearchDocumentCtrl'
        })
        .when('/logout', {
            templateUrl: 'directives/carousel/carousel.html',
            controller: 'LogoutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    //================================================
});

mainApp.directive('login', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/login/login.html',
        controller: 'LoginCtrl'
    };
});

mainApp.directive('carouselImages', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/carousel/carousel.html',
        controller: 'CarouselCtrl'
    };
});

mainApp.directive('searchDocument', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/search-document/search-document.html',
        controller: 'SearchDocumentCtrl'
    };
});
