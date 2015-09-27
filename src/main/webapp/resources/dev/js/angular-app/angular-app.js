'use strict';
var AngularApp = angular.module('AngularApp',
    [
        'ngRoute',
        'ngAnimate',
        'angular-loading-bar',
        'angularModalService',
        'ui-notification',
        'ngMessages'
    ]);

/* Route Provider */
AngularApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/home',
        controller: 'indexController'
    });

    $routeProvider.when('/users/show', {
        templateUrl: 'users/view/show',
        controller: 'userController'
    });
    $routeProvider.when('/users/management', {
        templateUrl: 'users/view/management',
        controller: 'userController'
    });
    $routeProvider.when('/404', {
        templateUrl: '/404',
        controller: 'indexController'
    });
    $routeProvider.otherwise({redirectTo: '/404'});
}]);
