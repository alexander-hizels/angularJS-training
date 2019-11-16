'use strict';

angular.module('appSearchDataTransferService', [])
    .service('searchTransferService', function() {
        var self = this;
        self.searchData = ' ';

        self.setSearchValue = function(val) {
            self.searchData = val;
        };

        self.getSearchValue = function() {
            return self.searchData;
        };

    });
