'use strict';

var colors = { blue: 'blue', green: 'green' };
var milisecInDay = 86400000;

angular.module('appBorderDateDirective', [])
    .directive('appBorderColor', function() {
        return {
            scope: false,
            link: function(scope, element, attrs) {
                var date = scope.course.date.getTime();
                var now = Date.now();
                if (date < now && date > now - 14 * milisecInDay) {
                    element.addClass('border-' + colors.green);
                }
                if (date > now) {
                    element.addClass('border-' + colors.blue);
                }
            },
            restrict: 'A'
        };
    });
