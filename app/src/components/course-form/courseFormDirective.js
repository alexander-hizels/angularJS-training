'use strict';

angular.module(
    'appCourseFormDirective',
    ['appCourseFormController']
)
    .directive('appCourseForm', function() {
        return {
            scope: false,
            templateUrl: '/src/components/course-form/courseForm.tpl.html',
            controller: [
                '$scope', 'coursesService',
                CourseFormController
            ],
            controllerAs: 'ctrl',
            restrict: 'E'
        };
    });
