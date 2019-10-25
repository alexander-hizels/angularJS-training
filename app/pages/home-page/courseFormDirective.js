angular.module('appCourseDirective')
    .directive('appCourseForm', function () {
        return {
            scope: false,
            templateUrl: "/pages/home-page/tmp/courseForm.tmp.html",
            restrict: "E"
        };
    });
