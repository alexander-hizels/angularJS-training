'use strict';

angular.module('appCoursesDirective', [
    'appCourseDirective',
    'appCoursesService',
    'appBorderDateDirective'
])
    .directive('appCourses', function() {
        return {
            scope: false,
            templateUrl: '/src/components/courses/courses.tpl.html',
            restrict: 'E'
        };
    });
