'use strict';

angular.module('myApp', [
    'ngRoute',
    'angular-jwt',
    'app.header',
    'app.footer',
    'app.home',
    'app.login'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/pages/home-page/homePage.tpl.html'
        })
        .when('/login', {
            templateUrl: 'src/pages/login-page/loginPage.tpl.html'
        });
    $routeProvider.otherwise({ redirectTo: '/' });
});
