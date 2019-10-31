'use strict';

angular.module('appCoursesDirective', [
    'appCourseDirective',
    'appCoursesService',
    'appCoursesController'
])
    .directive('appCourses', function() {
        return {
            scope: false,
            templateUrl: '/src/components/courses/courses.tpl.html',
            restrict: 'E'
        };
    });
