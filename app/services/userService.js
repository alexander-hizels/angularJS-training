'use strict';

angular.module('appUserService', [])
    .factory('userService', function() {
        return {
            courses: [ {
                id: 1,
                firstName: 'Vasy',
                LastName: 'Pupkin'
            }, {
                id: 2,
                firstName: 'Joan',
                LastName: 'Arc'
            }, {
                id: 3,
                firstName: 'Sandra',
                LastName: 'Carter'
            }, {
                id: 4,
                firstName: 'Anna',
                LastName: 'Frank'
            }, {
                id: 5,
                firstName: 'Yohji',
                LastName: 'Yamamoto'
            } ]
        };
    });
