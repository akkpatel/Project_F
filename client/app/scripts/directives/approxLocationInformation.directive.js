(function () {
    'use strict';

    approxLocationInformation.$inject = ['getFccService', '$q'];

    function approxLocationInformation(getFccService, $q) {
        return {
            restrict: 'E',
            templateUrl: 'views/approxLocationInformation.html',
            replace: true,
            scope: {
                model: '='
            },
            link: function (scope)
            {
                scope.model = scope.model;
                var init = function()
                {
                    for(var i = 0; i < scope.model.locations.length; i++)
                    {
                        var location = scope.model.locations[i];
                        return getFccService.getProxCallSigns(location.lat, location.lon, 3.0).then(function (response){
                            for(var j = 0; j < response.length; j++)
                            {
                                response[j].location = location.locationNumber;
                            }
                            scope.proxCallSign = response;
                            return scope.proxCallSign;
                        });

                    }
                }
                init();
            }   
        };
    }

    angular.module('fccApp').directive('approxLocationInformation', approxLocationInformation);
})();
