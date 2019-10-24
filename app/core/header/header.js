'use strict';

angular.module('myApp.header', ['headerDirective', 'logoDirective']);

angular.module('headerDirective', [])
    .directive('appHeader', function () {
        return {
            scope: false,
            templateUrl: "/core/header/tmp/header.tmp.html",
            restrict: "E"
        };
    });