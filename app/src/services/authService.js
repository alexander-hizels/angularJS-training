'use strict';

var USER = 'user';

angular.module('appAuthService', [])
    .factory('authService', function($window, jwtService) {
        var TOKEN = 'token';
        var isAuth = false;
        var $localStorage = $window.localStorage;

        function login(user) {
            isAuth = true;
            $localStorage.setItem(USER, JSON.stringify(user));
            $localStorage.setItem(TOKEN, jwtService.signJWT(user));
        }

        function logout() {
            isAuth = false;
            $localStorage.removeItem(USER);
            $localStorage.removeItem(TOKEN);
        }

        function isAuthenticated() {
            return isAuth;
        }

        function isUserGuard() {
            var token = $localStorage.getItem(TOKEN);
            var user = JSON.parse($localStorage.getItem(USER));
            isAuth = token && user && jwtService.verifyJWT(token, user);
            return isAuth;
        }

        return {
            isUserGuard: isUserGuard,
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated
        };
    });
