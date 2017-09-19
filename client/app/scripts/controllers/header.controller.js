    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('fccApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$state'];
    function HeaderController($scope, $state) {
        
        $scope.name = 'Company Name';

        
    }
})();
    /* jshint ignore:end */
