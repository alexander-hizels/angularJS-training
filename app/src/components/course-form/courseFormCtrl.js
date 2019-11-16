'use strict';

angular.module('appCourseFormController', [])
    .controller('CourseFormController', CourseFormController);

function CourseFormController($scope, coursesService) {
    var vm = this;
    vm.delete = function() {
        if (confirm('Are you sure you want to delete course?')) {
            coursesService.remove($scope.data.id);
        }
    };

    vm.update = function(course) {
        coursesService.update($scope.data);
    };

}
