(function () {
    'use strict';

    frequencyInformation.$inject = [];

    function frequencyInformation() {
        return {
            restrict: 'E',
            templateUrl: 'views/frequencyInformation.html',
            replace: true,
            scope: {
                model: '='
            },
            link: function (scope)
            {
                
            }   
        };
    }

    angular.module('fccApp').directive('frequencyInformation', frequencyInformation);
})();
