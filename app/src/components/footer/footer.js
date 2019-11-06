'use strict';

angular.module('app.footer', [])
    .directive('appFooter', function() {
        return {
            scope: false,
            templateUrl: '/src/components/footer/footer.tpl.html',
            restrict: 'E'
        };
    });
