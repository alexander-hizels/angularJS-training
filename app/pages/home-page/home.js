angular.module('app.home', [
  'appCoursesDirective'
]);

angular.module('app.home')
  .directive('appHome', function () {
    return {
      scope: false,
      templateUrl: "/pages/home-page/tmp/homePage.tmp.html",
      restrict: "E"
    };
  });
  