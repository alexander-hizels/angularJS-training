'use strict';

angular.module('appSearchController', [
    'appSearchDataTransferService'
])
    .controller(
        'SearchCtrl',
        function($scope, searchTransferService, coursesService, authService) {
            $scope.searchText = '';
            $scope.isAuth = authService.isAuthenticated();

            $scope.setSearchText = function() {
                searchTransferService.setSearchValue($scope.searchText);
            };

            $scope.addCourse = function() {
                coursesService.create();
            };
        }
    );
