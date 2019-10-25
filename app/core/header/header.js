'use strict';

angular.module('app.header', [])
    .directive('appHeader', function () {
        return {
            scope: false,
            templateUrl: "/core/header/tmp/header.tmp.html",
            restrict: "E"
        };
    });
