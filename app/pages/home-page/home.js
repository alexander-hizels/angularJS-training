var home = angular.module('myApp.home', [
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
      link: function (scope, element, attrs) {
        console.log('home scope', scope);
        console.log('home attrs', attrs);
      },
      restrict: "EACM"
    };
  });