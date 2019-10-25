angular.module('app.home')
    .directive('appBreadCrumbs', function () {
        return {
            scope: false,
            templateUrl: "/pages/home-page/tmp/breadCrumbs.tmp.html",
            restrict: "E"
        };
    });
