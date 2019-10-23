var logoDirective = angular.module('searchDirective',[])
.directive('search', function () {
  return {
    scope: false,
    templateUrl: "/pages/home-page/tmp/search.tmp.html",
    link: function (scope, element, attrs) {
      console.log('LOGO scope', scope);
      console.log('LOGO attrs', attrs);

    },
    restrict: "EACM"
  };
});