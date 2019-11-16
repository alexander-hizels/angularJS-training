'use strict';

angular.module('appSearchController', [
    'appSearchDataTransferService'
])
    .controller(
        'SearchCtrl',
        function($scope, searchTransferService, coursesService, $location) {
            $scope.searchText = '';

            $scope.setSearchText = function() {
                searchTransferService.setSearchValue($scope.searchText);
                // console.log($location.path());
                // $location.path('/login');
            };

            $scope.addCourse = function() {
                coursesService.create();
            };
        }
    );
