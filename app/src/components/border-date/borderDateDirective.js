'use strict';

var COLORS = { blue: 'blue', green: 'green' };
var MLSEC_A_DAY = 86400000;

angular.module('appBorderDateDirective', [])
    .directive('appBorderColor', function() {
        return {
            scope: false,
            link: function(scope, element) {
                var date = scope.course.date.getTime();
                var now = Date.now();
                if (date < now && date > now - 14 * MLSEC_A_DAY) {
                    element.addClass('border-' + COLORS.green);
                } else if (date > now) {
                    element.addClass('border-' + COLORS.blue);
                }
            },
            restrict: 'A'
        };
    });
