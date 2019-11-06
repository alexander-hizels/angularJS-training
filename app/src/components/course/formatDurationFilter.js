'use strict';

var MIN_AN_HOUR = 60;

angular.module('appCourseDirective')
    .filter(
        'formatDuration',
        function() {
            return function(duration) {
                var durationCalc = duration / MIN_AN_HOUR;
                var hours = Math.floor(durationCalc);
                var formatDuration = hours > 0 ?
                    hours + ' h ' + (durationCalc - hours) * MIN_AN_HOUR + ' min'
                    : duration + ' min';

                return formatDuration;
            };
        }
    );
