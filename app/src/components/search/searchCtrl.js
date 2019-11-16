'use strict';

angular.module('appSearchController', [
    'appSearchDataTransferService'
])
    .controller(
        'SearchCtrl',
        function($scope, searchTransferService, coursesService) {
            $scope.searchText = '';

            $scope.setSearchText = function() {
                searchTransferService.setSearchValue($scope.searchText);
            };

            $scope.addCourse = function() {
                coursesService.create();
            };
        }
    );
