'use strict';

angular.module('appCoursesDirective')
    .controller('CoursesController', CoursesController);

function CoursesController($scope, $rootScope, coursesService, searchTransferService) {
    var vm = this;
    vm.$onInit = function() {
        console.log('$onInit');
        $scope.courses = coursesService.getListCourses();
        coursesService.subscribe($scope, function somethingChanged() {
            $scope.courses = coursesService.getListCourses();
        });
    };

    vm.$onChanges = function() {
        console.log('$onChanges');
    };

    $scope.coursesLimit = 2;
    $scope.dataMessage = 'no data. feel free to add new course';

    $scope.loadMore = function() {
        $scope.coursesLimit += 1;
        $scope.courses = coursesService.getListCourses();
    };

    vm.update = function() {
        $scope.courses = coursesService.getListCourses();
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
