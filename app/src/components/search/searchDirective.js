'use strict';

angular.module('appSearchDirective', ['appSearchController'])
    .directive('appSearch', function() {
        return {
            scope: false,
            templateUrl: '/src/components/search/search.tpl.html',
            restrict: 'E'
        };
    });
