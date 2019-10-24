angular.module('myApp.home', [
  'homeDirective',
  'breadCrumbsDirective',
  'appCoursesDirective',
  'searchDirective'
]);

angular.module('homeDirective', [])
  .directive('appHome', function () {
    return {
      scope: false,
      templateUrl: "/pages/home-page/tmp/homePage.tmp.html",
      restrict: "E"
    };
  });
  