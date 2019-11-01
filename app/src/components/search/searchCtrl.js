'use strict';

angular.module('appSearchController', [])
    .controller('SearchCtrl', function($scope) {
        $scope.searchText = '';
        $scope.logSearchText = function() {
            console.log($scope.searchText);
        };
    });
