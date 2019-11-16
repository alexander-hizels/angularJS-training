'use strict';

angular.module('appUserService', [])
    .factory('userService', function($window) {
        var users = [ {
            id: 1,
            firstName: 'Vasy',
            lastName: 'Pupkin',
            password: 'password'
        }, {
            id: 2,
            firstName: 'Joan',
            lastName: 'Arc',
            password: 'password'
        }, {
            id: 3,
            firstName: 'Sandra',
            lastName: 'Carter',
            password: 'password'
        }, {
            id: 4,
            firstName: 'Anna',
            LastName: 'Frank'
        }, {
            id: 5,
            firstName: 'Yohji',
            lastName: 'Yamamoto',
            password: 'password'
        } ];

        function getUserList() {
            return users;
        }

        function getUserByName(firstName) {
            return users.find(function(user) {
                return user.firstName === firstName;
            });
        }

        function getCurrentUser() {
            var user = JSON.parse($window.localStorage.getItem(USER));
            return user;
        }

        return {
            getCurrentUser: getCurrentUser,
            getUserList: getUserList,
            getUserByName: getUserByName
        };
    });
