'use strict';

angular.module('appCourseDirective')
    .filter(
        'formatDuration',
        function() {
            return function(duration) {
                var durarationCalc = duration / 60;
                var hours = Math.floor(durarationCalc);
                var formatDuration = hours > 0 ?
                    hours + ' h ' + (durarationCalc - hours) * 60 + ' min'
                    : duration + ' min';

                return formatDuration;
            };
        }
    );
