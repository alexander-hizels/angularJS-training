var footer = angular.module('myApp.footer',['footerDirective']);

angular.module('footerDirective',[])
.directive('appFooter', function () {
  return {
    scope: false,
    templateUrl: "/core/footer/tmp/footer.tmp.html",
    link: function (scope, element, attrs) {
      scope.data = scope[attrs["title"]];
      console.log('header-title attrs.title', attrs.title);
      console.log('header-title scope', scope);
      console.log('header-title attrs', attrs);

    },
    restrict: "EACM"
  };
});