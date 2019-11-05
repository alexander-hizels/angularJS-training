'use strict';

angular.module('myApp', [
    'ngRoute',
    'app.header',
    'app.footer',
    'app.home'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/pages/home-page/homePage.tpl.html'
        });
    $routeProvider.otherwise({ redirectTo: '/' });
});
