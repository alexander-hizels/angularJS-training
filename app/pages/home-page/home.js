'use strict';

angular.module('app.home', [
    'appCoursesDirective', 'appSearchDirective'
]);

angular.module('app.home')
    .directive('appHome', function() {
        return {
            scope: false,
            templateUrl: '/pages/home-page/homePage.tpl.html',
            restrict: 'E'
        };
    });
