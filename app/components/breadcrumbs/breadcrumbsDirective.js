'use strict';

angular.module('app.home')
    .directive('appBreadcrumbs', function() {
        return {
            scope: false,
            templateUrl: '/components/breadcrumbs/breadcrumbs.tpl.html',
            restrict: 'E'
        };
    });
