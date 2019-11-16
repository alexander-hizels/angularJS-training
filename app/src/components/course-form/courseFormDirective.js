'use strict';

angular.module('appCourseFormDirective', ['appCourseFormController'])
    .directive('appCourseForm', function() {
        return {
            scope: false,
            templateUrl: '/src/components/course-form/courseForm.tpl.html',
            link: function(scope, element, attrs) {
                console.log(scope);
            },
            restrict: 'E'
        };
    });
