(function () {
    'use strict';

    calculateInterferance.$inject = ['getFccService', '$q', '_'];

    function calculateInterferance(getFccService, $q, _) {
        return {
            restrict: 'E',
            templateUrl: 'views/calculateInterferance.html',
            replace: true,
            scope: {
                model: '=',
                proxLocation: '='
            },
            link: function (scope)
            {
                var originalCallSign = scope.model.callsign;
                console.log('check the model now: ', scope.model);

                var calculateInt = function(freqInformation)
                {
                    var interferringFreq = [];
                    //for(var i = 0; i < freqInformation.length; i++)
                    for(var i = 0; i < 2; i++)
                    {
                        console.log('check the callsign: ', freqInformation[i].callsign);
                        console.log('check the original sing: ', originalCallSign);
                        if(freqInformation[i].callsign !== originalCallSign){
                            $q.when(getFccService.getCallSign(freqInformation[i].callsign)).then(function (response){
                                //add what to subtract and then add it to the interferringFreq
                                //console.log('response in callSign: ', response);
                                //findInteferringFrequency(scope.model, response);
                            })
                        }
                    }
                }

                var findInteferringFrequency = function(originalModel, interferringModel)
                {
                    for(var i = 0; i < originalModel.frequencies.length; i++)
                    {
                        for(var j = 0; j < interferringModel.frequencies.length; j++)
                        {
                            var freqValue = originalModel.frequencies[i].frequency - interferringModel.frequencies[j].frequency;
                            console.log('original freq: ', originalModel.frequencies[i].frequency);
                            console.log('interferring freq: ', interferringModel.frequencies[j].frequency);
                            console.log('check the freqValue: ', freqValue);
                        }
                    }
                }
                calculateInt(scope.proxLocation);

            }   
        };
    }

    angular.module('fccApp').directive('calculateInterferance', calculateInterferance);
})();
