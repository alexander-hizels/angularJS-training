'use strict';

angular.module('app.header', [])
    .directive('appHeader', function() {
        return {
            scope: false,
            templateUrl: '/components/header/header.tpl.html',
            restrict: 'E'
        };
    });
