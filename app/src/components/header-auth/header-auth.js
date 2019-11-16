'use strict';

angular.module('app.headerAuth', [])
    .directive('appHeaderAuth', function() {
        return {
            scope: false,
            templateUrl: '/src/components/header-auth/header-auth.tpl.html',
            restrict: 'E'
        };
    });
