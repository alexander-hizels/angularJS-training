'use strict';

angular.module('appCourseDirective')
    .directive('appCourseForm', function() {
        return {
            scope: false,
            templateUrl: '/src/components/course-form/courseForm.tpl.html',
            restrict: 'E'
        };
    });
