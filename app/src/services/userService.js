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
            lastName: 'Frank',
            password: 'password'
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
                console.log(user.firstName.localeCompare(firstName) === 0);
                var u = (user.firstName.toLocaleLowerCase()).localeCompare(firstName.toLocaleLowerCase()) === 0;
                return user.firstName.toLocaleLowerCase().localeCompare(firstName.toLocaleLowerCase()) === 0;
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
