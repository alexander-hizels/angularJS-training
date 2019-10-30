'use strict';

angular.module('app.footer', []);

angular.module('app.footer')
    .directive('appFooter', function() {
        return {
            scope: false,
            templateUrl: '/components/footer/footer.tpl.html',
            restrict: 'E'
        };
    });
