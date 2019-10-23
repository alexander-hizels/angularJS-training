var logoDirective = angular.module('breadCrumbsDirective',[])
.directive('breadCrumbs', function () {
  return {
    scope: false,
    templateUrl: "/pages/home-page/tmp/breadCrumbs.tmp.html",
    link: function (scope, element, attrs) {
      console.log('LOGO scope', scope);
      console.log('LOGO attrs', attrs);

    },
    restrict: "EACM"
  };
});