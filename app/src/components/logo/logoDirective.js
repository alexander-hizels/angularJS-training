'use strict';

angular.module('app.header')
    .directive('appLogo', function() {
        return {
            scope: false,
            templateUrl: '/src/components/logo/logo.tpl.html',
            restrict: 'E'
        };
    });
