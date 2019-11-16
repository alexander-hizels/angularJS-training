'use strict';

angular.module('appJwtService', [])
    .factory('jwtService', function(jwtHelper) {
        var TOKENS = {
            Joan: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9' +
                '.eyJMYXN0TmFtZSI6IkFyYyIsIkZpcnN0TmFtZSI6IkpvYW4iLCJrZXkiOiJzZWNyZXQiLCJpYXQiOjE1MTYyMzkwMjJ9' +
                '.HpChQ6XcGNckE0vTxG4u4Qqds21pB0zuLBGXyXukIhjzFBisdjIs4zYdCd1xiKKqwe_2sTs9D--iW3gIrA02Ng',
            Sandra: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.' +
                'eyJMYXN0TmFtZSI6IkNhcnRlciIsIkZpcnN0TmFtZSI6IlNhbmRyYSIsImtleSI6InNlY3JldCIsImlhdCI6MTUxNjIzOTAyM30' +
                '.OTvd1Ln_lo7A1hgJjYZdwKpEtyUNhEF8L0nmysjE8hV8D0zLX0VcAExa8ep4UArn51-oDciEMxjcXs8kYgY2uA'
        };
        var TOKEN_KEY = 'secret';

        function signJWT(user) {
            return TOKENS[user.firstName];
        }

        function verifyJWT(token, user) {
            var userToken = jwtHelper.decodeToken(token);
            if (userToken.key === TOKEN_KEY &&
                userToken.FirstName === user.firstName &&
                userToken.LastName === user.lastName) {
                return true;
            }

            return false;
        }

        return {
            signJWT: signJWT,
            verifyJWT: verifyJWT
        };
    });
