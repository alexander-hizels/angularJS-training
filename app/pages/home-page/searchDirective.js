angular.module('app.home')
    .directive('appSearch', function () {
        return {
            scope: false,
            templateUrl: "/pages/home-page/tmp/search.tmp.html",
            restrict: "E"
        };
    });
