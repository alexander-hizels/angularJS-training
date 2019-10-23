var logoDirective = angular.module('logoDirective',[])
.directive('appLogo', function () {
  return {
    scope: false,
    templateUrl: "/core/header/tmp/logo.tmp.html",
    link: function (scope, element, attrs) {
      scope.data = scope[attrs["title"]];
      console.log('LOGO attrs.title', attrs.title);
      console.log('LOGO scope', scope);
      console.log('LOGO attrs', attrs);

    },
    restrict: "EACM"
  };
});