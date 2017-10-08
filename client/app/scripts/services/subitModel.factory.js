(function () {
    'use strict';
    
    SubmitModel.$inject = [];
    function SubmitModel() {
        function Model(searchText) {
            var self = this;
            this.callSign = null;
            this.FRN = null;
            this.currentDataModel = null;

            this.setSearchParameter = function(callSign, FRN)
            {
                this.callSign = callSign;
                this.FRN = FRN;
            }
        }
        return Model;
    }

    angular.module('fccApp').factory('SubmitModel', SubmitModel);

})();
