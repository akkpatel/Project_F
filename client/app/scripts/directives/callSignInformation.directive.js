(function () {
    'use strict';

    callSignInformation.$inject = [];

    function callSignInformation() {
        return {
            restrict: 'E',
            templateUrl: 'views/callSignInformation.html',
            replace: true,
            scope: {
                model: '='
            },
            link: function (scope)
            {
                console.log('we are in callSignInformation: ', scope.model);
            }   
        };
    }

    angular.module('fccApp').directive('callSignInformation', callSignInformation);
})();
