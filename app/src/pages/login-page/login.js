'use strict';

angular.module('app.login', [
    'angular-jwt',
    'appUserService',
    'appAuthService',
    'appJwtService',
    'app.headerAuth'
]);

angular.module('app.login')
    .directive('appLogin', function() {
        return {
            scope: false,
            templateUrl: '/scr/pages/login-page/loginPage.tpl.html',
            restrict: 'E'
        };
    });

angular.module('app.login')
    .controller(
        'LoginCtrl',
        function($scope, userService, authService, $location, $window, $timeout) {
            var DELAY = 10000;
            var vm = this;
            vm.user = {};
            vm.message = {};

            vm.showMessage = function(message) {
                vm.message = message;
                $timeout(function() {
                    vm.message = {};
                }, DELAY);
            };

            vm.formSubmit = function(form) {
                var user = userService.getUserByName(vm.user.name);
                if (user) {
                    if (user.password === vm.user.password) {
                        authService.login(user);
                        vm.showMessage({
                            text: 'Success',
                            type: 'success'
                        });
                        $location.path('/home');
                    } else {
                        vm.showMessage({
                            text: 'Invalid password',
                            type: 'danger'
                        });
                    }
                } else {
                    vm.showMessage({
                        text: 'User not exist',
                        type: 'danger'
                    });
                }
            };
        }
    );
