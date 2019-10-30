'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'app.header',
    'app.footer',
    'app.home'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/pages/home-page/homePage.tpl.html'
        });
    $routeProvider.otherwise({ redirectTo: '/' });
});
