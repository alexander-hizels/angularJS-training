'use strict';

angular.module('appSearchController', [
    'appSearchDataTransferService'
])
    .controller(
        'SearchCtrl',
        function($scope, searchTransferService) {
            $scope.searchText = '';

            $scope.logSearchText = function() {
                searchTransferService.setSearchValue($scope.searchText);
            };
        }
    );
