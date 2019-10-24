angular.module('appCoursesDirective', [
    'appCourseDirective',
    'appCoursesService',
    'appCoursesController'])
    .directive('appCourses', function () {
        return {
            scope: false,
            templateUrl: "/pages/home-page/tmp/courses.tmp.html",
            link: function (scope, element, attrs) {

            },
            restrict: "E"
        };
    });