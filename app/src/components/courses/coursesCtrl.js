'use strict';

angular.module('appCoursesDirective')
    .controller('CoursesController', CoursesController);

function CoursesController($scope, $rootScope, coursesService, searchTransferService) {
    var self = this;
    this.$onInit = function() {
        console.log('$onInit');
        $scope.courses = coursesService.getListCourses();
        // self.notify = $rootScope.$on('notifying-service-event', function() {
        //     console.log('notifying-service-event');
        //     $scope.courses = coursesService.getListCourses();
        // });
        coursesService.subscribe($scope, function somethingChanged() {
            console.log('notifying-service-event');
            $scope.courses = coursesService.getListCourses();
        });
    };

    this.$onChanges = function() {
        console.log('$onChanges');
    };

    $scope.coursesLimit = 2;
    $scope.dataMessage = 'no data. feel free to add new course';

    $scope.loadMore = function() {
        $scope.coursesLimit += 1;
        $scope.courses = coursesService.getListCourses();
    };

    self.update = function() {
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
