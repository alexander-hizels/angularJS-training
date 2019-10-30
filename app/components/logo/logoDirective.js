'use strict';

angular.module('app.header')
    .directive('appLogo', function() {
        return {
            scope: false,
            templateUrl: '/components/logo/logo.tpl.html',
            restrict: 'E'
        };
    });
