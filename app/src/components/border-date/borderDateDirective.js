'use strict';

var COLORS = { blue: 'blue', green: 'green' };
var MLSEC_A_DAY = 86400000;

angular.module('appBorderDateDirective', [])
    .directive('appBorderColor', function() {
        return {
            scope: false,
            link: function(scope, element) {
                var courseDate = scope.course.date.getTime();
                var currentDate = Date.now();
                if (courseDate < currentDate && courseDate > currentDate - 14 * MLSEC_A_DAY) {
                    element.addClass('border-' + COLORS.green);
                } else if (courseDate > currentDate) {
                    element.addClass('border-' + COLORS.blue);
                }
            },
            restrict: 'A'
        };
    });
