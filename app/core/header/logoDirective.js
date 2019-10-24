angular.module('logoDirective', [])
    .directive('appLogo', function () {
        return {
            scope: false,
            templateUrl: "/core/header/tmp/logo.tmp.html",
            restrict: "E"
        };
    });
    