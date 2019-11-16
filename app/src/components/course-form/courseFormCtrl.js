'use strict';

angular.module('appCourseFormController', [])
    .controller('CourseFormController', CourseFormController);

function CourseFormController($scope, coursesService) {
    var self = this;
    self.delete = function() {
        coursesService.remove($scope.data.id);
    };

    self.update = function(course) {
        coursesService.update($scope.data);
    };

}
