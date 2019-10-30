'use strict';

angular.module('appCourseDirective', [])
    .directive('appCourse', function() {
        return {
            scope: false,
            templateUrl: '/components/course/course.tpl.html',
            link: function(scope, element, attrs) {
                scope.data = scope[attrs.data];
            },
            restrict: 'E'
        };
    });
