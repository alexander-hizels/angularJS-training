angular.module('appCoursesController', [])
    .controller('CoursesController',
        function ($scope, coursesService) {
            $scope.getCourses = function () {
                return coursesService.courses;
            };
        }
    );
    