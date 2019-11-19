'use strict';

angular.module('appCourseFormController', [])
    .controller('CourseFormController', CourseFormController);

function CourseFormController($scope, coursesService) {
    var vm = this;
    var CONFIRM_MESSAGE = 'Are you sure you want to delete course?';
    vm.delete = function() {
        if (confirm(CONFIRM_MESSAGE)) {
            coursesService.remove($scope.data.id);
        }
    };

    vm.update = function(course) {
        coursesService.update($scope.data);
    };
}
