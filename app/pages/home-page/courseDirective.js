angular.module('appCourseDirective', ['appCourseFormDirective'])
    .directive('appCourse', function () {
        return {
            scope: false,
            templateUrl: "/pages/home-page/tmp/course.tmp.html",
            link: function (scope, element, attrs) {
                scope.data = scope[attrs["data"]];
            },
            restrict: "E"
        };
    });
    