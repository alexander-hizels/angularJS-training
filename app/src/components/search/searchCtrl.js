'use strict';

angular.module('appSearchController', [
    'appSearchDataTransferService'
])
    .controller(
        'SearchCtrl',
        function($scope, searchTransferService) {
            $scope.searchText = '';

            $scope.setSearchText = function() {
                searchTransferService.setSearchValue($scope.searchText);
            };
        }
    );
