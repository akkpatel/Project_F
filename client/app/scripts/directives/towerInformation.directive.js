(function () {
    'use strict';

    towerInformation.$inject = [];

    function towerInformation() {
        return {
            restrict: 'E',
            templateUrl: 'views/towerInformation.html',
            replace: true,
            scope: {
                model: '='
            },
            link: function (scope)
            {
                console.log('check the model in towerInformation: ', scope.model);
            }   
        };
    }

    angular.module('fccApp').directive('towerInformation', towerInformation);
})();
