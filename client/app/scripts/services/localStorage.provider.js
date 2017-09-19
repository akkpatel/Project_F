/**
 * TODO - use for local storage if this is how we're gonna store company codes,
 * TODO - use for local storage if JWT/Auth needed
 * eg:
 * var projectCode = LocalStore.get(PROJECT_CODE_STORAGE_KEY) || null;
 * LocalStore.put(JWT_ACCESS_TOKEN_KEY, null);
 *
 */

(function() {
    'use strict';

    //LocalStorageProvider.$inject = [];
    function LocalStorageProvider() {
        this.$get = ['LocalStorage', function(LocalStorage){
            return LocalStorage;
        }];
    }

    angular.module('fccApp').provider('LocalStore', LocalStorageProvider);
})();
