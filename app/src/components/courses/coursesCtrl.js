'use strict';

angular.module('appCoursesDirective')
    .controller('CoursesController', CoursesController);

function CoursesController($scope, coursesService, searchTransferService) {

    this.$onInit = function() {
        console.log('$onInit');
    };

    this.$onChanges = function() {
        console.log('$onChanges');
    };

    $scope.coursesLimit = 2;
    $scope.dataMessage = 'no data. feel free to add new course';

    $scope.getCourses = function() {
        return coursesService.courses;
    };

    $scope.loadMore = function() {
        $scope.coursesLimit += 1;
    };

    $scope.orderByDate = function(course) {
        var time = course.date.getTime();

        return -time;
    };

    $scope.getFilterValue = function() {
        var searchVal = searchTransferService.getSearchValue();

        return searchVal;
    };
}
