angular.module('app.footer', []);

angular.module('app.footer')
    .directive('appFooter', function () {
        return {
            scope: false,
            templateUrl: "/core/footer/tmp/footer.tmp.html",
            restrict: "E"
        };
});
