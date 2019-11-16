'use strict';

angular.module('app.header', [ 'appAuthService', 'appUserService' ])
    .directive('appHeader', function() {
        return {
            scope: false,
            templateUrl: '/src/components/header/header.tpl.html',
            controller: [
                'authService', 'userService',
                HeaderController ],
            controllerAs: 'headerCtrl',
            restrict: 'E'
        };
    });

function HeaderController(authService, userService) {
    var vm = this;

    vm.$onInit = function() {
        vm.userName = 'guest';
        vm.isAuthenticated = authService.isUserGuard();
        console.log(vm.isAuthenticated);
        if (vm.isAuthenticated) {
            var user = userService.getCurrentUser();
            if (user) {
                vm.userName = user.firstName;
            }
        }
    };
}
