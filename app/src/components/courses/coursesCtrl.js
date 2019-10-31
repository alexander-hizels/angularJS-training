'use strict';

angular.module('appCoursesController', [])
    .controller('CoursesController', CoursesController);

function CoursesController($scope, coursesService) {
    this.$onInit = function() {
        console.log('$onInit');
    };

    this.$onChanges = function() {
        console.log('$onChanges');
    };

    $scope.coursesLimit = 2;

    $scope.getCourses = function() {
        return coursesService.courses;
    };

    $scope.loadMore = function() {
        $scope.coursesLimit += 1;
        console.log('You loaded ' + $scope.coursesLimit + ' courses');
    };
}
