'use strict';

// require('logoDirective.js');

var header = angular.module('myApp.header',['headerDirective', 'logoDirective'])

  .controller('headerCtrl', function ($scope) {
    $scope.hello = "Hello";
  })
;

angular.module('headerDirective',[])
.directive('appHeader', function () {
  return {
    scope: false,
    templateUrl: "/core/header/tmp/header.tmp.html",
    link: function (scope, element, attrs) {
      scope.data = scope[attrs["title"]];
      console.log('header-title attrs.title', attrs.title);
      console.log('header-title scope', scope);
      console.log('header-title attrs', attrs);

    },
    restrict: "EACM"
  };
});