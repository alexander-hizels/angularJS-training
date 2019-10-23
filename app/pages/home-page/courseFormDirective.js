angular.module('appCourseFormDirective',[])
.directive('courseForm', function () {
  return {
    scope: false,
    templateUrl: "/pages/home-page/tmp/courseForm.tmp.html",
    link: function (scope, element, attrs) {
    },
    restrict: "EACM"
  };
});