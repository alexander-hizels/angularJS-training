'use strict';

angular.module('appJwtService', [])
    .factory('jwtService', function(jwtHelper) {
        var TOKENS = {
            Joan: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                'eyJGaXJzdE5hbWUiOiJKb2FuIiwiTGFzdE5hbWUiOiJBcmMiLCJrZXkiOiJzZWNyZXQifQ.' +
                'v-Y-Sfl7VrLHeEupcLiaA3DPQbVFAJ-Gv1qz1zdxxj4',
            Sandra: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.' +
                'eyJMYXN0TmFtZSI6IkNhcnRlciIsIkZpcnN0TmFtZSI6IlNhbmRyYSIsImtleSI6InNlY3JldCIsImlhdCI6MTUxNjIzOTAyM30' +
                '.OTvd1Ln_lo7A1hgJjYZdwKpEtyUNhEF8L0nmysjE8hV8D0zLX0VcAExa8ep4UArn51-oDciEMxjcXs8kYgY2uA',
            Vasy: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                'eyJGaXJzdE5hbWUiOiJWYXN5IiwiTGFzdE5hbWUiOiJQdXBraW4iLCJrZXkiOiJzZWNyZXQifQ.' +
                'l4guj0is5dT8uLYLGkSwpzpKYeweZeRSB9X36kubOe4',
            Anna: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                'eyJGaXJzdE5hbWUiOiJBbm5hIiwiTGFzdE5hbWUiOiJGcmFuayIsImtleSI6InNlY3JldCJ9.' +
                'qapx5b_LUHrLBm0Spr-sm5rp4fYDHkbO1YD6_EPHoLM',
            Yohji: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                'eyJGaXJzdE5hbWUiOiJZb2hqaSIsIkxhc3ROYW1lIjoiWWFtYW1vdG8iLCJrZXkiOiJzZWNyZXQifQ.' +
                'U2IeFg9IqZuDYRGRWJtyUfVZpAVcGEPDouAig-RxPps'
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
