/**
 * Used to track changes within an editing context.
 */

(function () {
    'use strict';
    
    EditContext.$inject = ['$rootScope', 'SubmitModel'];
    function EditContext($rootScope, SubmitModel) {
        var scope = $rootScope.$new();
        var deregWatch = null;

        var api = {
            model: null,
            action: null,
            postActionHandler: null,
            dirty: false,

            init: function (model) {
                if(deregWatch !== null)
                {
                    // deregister watch function for old model
                    deregWatch();
                }

                this.model = model || new SubmitModel();
                this.dirty = false;
            }
        };

        api.init();
        return api;
    }

    angular.module('fccApp').factory('EditContext', EditContext);
})();


