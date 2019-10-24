angular.module('breadCrumbsDirective', [])
    .directive('appBreadCrumbs', function () {
        return {
            scope: false,
            templateUrl: "/pages/home-page/tmp/breadCrumbs.tmp.html",
            restrict: "E"
        };
    });
    