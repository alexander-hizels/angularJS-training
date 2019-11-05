'use strict';

angular.module('appSearchDataTransferService', [])
    .service('searchTransferService', function() {
        var self = this;
        self.searchData = ' ';

        self.setSearchValue = function(x) {
            self.searchData = x;
        };

        self.getSearchValue = function() {
            return self.searchData;
        };

    });
