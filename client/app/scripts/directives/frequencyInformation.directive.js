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
                //console.log('check the model in frequencyInformation: ', scope.model);
                scope.$watch('model', function(newValue, oldValue){
                    if(newValue)
                    {
                        scope.dataModel = scope.exor(newValue);
                        console.log('check the dataModel: ', scope.dataModel);
                    }
                });
                scope.exor = function(data)
                {
                    for(var i = 0; i < data.locations.length; i++)
                    {
                        for (var j = 0; j < data.frequencies.length; j++)
                        {
                            if(data.locations[i].locationNumber === data.frequencies[j].locationNumber)
                            {
                                data.frequencies[j].lat = data.locations[i].lat;
                                data.frequencies[j].lon = data.locations[i].lon;
                                data.frequencies[j].city = data.locations[i].city;
                                data.frequencies[j].county = data.locations[i].county;
                                data.frequencies[j].state = data.locations[i].state;
                            }
                        }
                    }
                    return data;
                }
                // scope.getFrequencyInfo = function(dataModel, locationNumber)
                // {
                //     for(var i = 0; i < dataModel; i++)
                //     {
                //         if(dataModel[i].locationNumber === locationNumber)
                //         {
                //             console.log('returning a dataModel: ', dataModel[i]);
                //             return dataModel[i];
                //         }
                //     }
                // };
            }   
        };
    }

    angular.module('fccApp').directive('frequencyInformation', frequencyInformation);
})();
