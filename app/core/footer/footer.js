angular.module('myApp.footer', ['footerDirective']);

angular.module('footerDirective', [])
    .directive('appFooter', function () {
        return {
            scope: false,
            templateUrl: "/core/footer/tmp/footer.tmp.html",
            restrict: "E"
        };
});
