'use strict';

angular.module('app.home', [
    'appCoursesDirective',
    'appSearchDirective',
    'appSearchDataTransferService'
]);

angular.module('app.home')
    .directive('appHome', function() {
        return {
            scope: false,
            templateUrl: '/scr/pages/home-page/homePage.tpl.html',
            restrict: 'E'
        };
    });
