'use strict';

angular.module('app.home')
    .directive('appBreadcrumbs', function() {
        return {
            scope: false,
            templateUrl: '/src/components/breadcrumbs/breadcrumbs.tpl.html',
            restrict: 'E'
        };
    });
