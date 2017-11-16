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
                console.log('check the proxLocation: ', scope.proxLocation);
                var originalCallSign = scope.model.callsign.toUpperCase();

                scope.TowerMetaData = {
                    InterferringTower: {name: 'Interferring Tower Info', frequencies: []},
                };

                var removeDuplicateFrequency = function(model)
                {
                    if(model && model.frequencies){
                        model.frequencies = _.uniqWith(model.frequencies, function (o1, o2) {
                            return o1['frequency'] === o2['frequency'] && o1['locationNumber'] === o2['locationNumber'];
                        });
                    }
                }

                var addFreqToTower = function(model)
                {
                    for(var i = 0; i < model.locations.length; i++)
                    {
                        if(model && model.frequencies){
                            model.locations[i].frequencies = [];
                            for(var j = 0; j < model.frequencies.length; j++)
                            {
                                if(model.frequencies[j].locationNumber === model.locations[i].locationNumber)
                                {
                                    var item = {
                                        frequency: model.frequencies[j].frequency
                                    }
                                    model.locations[i].frequencies.push(item);
                                }
                            }
                        }
                    }
                }


                var calculateInt = function(freqInformation)
                {
                    var interferringFreq = [];
                    for(var i = 0; i < freqInformation.length; i++)
                    //for(var i = 0; i < 100; i++)
                    {
                        if(freqInformation[i].callsign !== originalCallSign && freqInformation[i].distance > 0){
                            $q.when(getFccService.getCallSign(freqInformation[i].callsign)).then(function (response){
                                //add what to subtract and then add it to the interferringFreq
                                if(response && response.status && response.status === 'A')
                                {
                                    console.log('Insisde the status');
                                    removeDuplicateFrequency(response);
                                    addFreqToTower(response);
                                    findInteferenceFrequency(scope.model, response);
                                }
                            })
                        }
                    }
                }


                var findInteferenceFrequency = function(originalModel, interferringModel)
                {
                    console.log('check the interferringModel: ', interferringModel);
                    for (var i = 0; i < interferringModel.locations.length; i++)
                    {
                        scope.freq = interferringModel.locations[i].frequencies;
                        if(scope.freq){
                            for(var j = 0; j < scope.freq.length; j++)
                            {
                                for(var k = 0 ; k < originalModel.frequencies.length; k++)
                                {
                                    var freqValue = originalModel.frequencies[k].frequency - scope.freq[j].frequency;
                                    if(freqValue > -0.150 && freqValue < 0.150 && freqValue !== 0)
                                    {
                                        // console.log('originalModl frequency: ', originalModel.frequencies[k].frequency);
                                        console.log('check the freqValue: ', freqValue);
                                        // console.log('freq model frequency: ', scope.freq[j]);

                                        if(interferringModel.locations[i].lon &&  interferringModel.locations[i].lat && scope.TowerMetaData['InterferringTower'].frequencies.indexOf(interferringModel.locations[i]) === -1)
                                        {
                                            scope.TowerMetaData['InterferringTower'].frequencies.push(interferringModel.locations[i]);
                                        }

                                    }
                                }
                            }
                        }
                    }
                    console.log('check the TowerMetaData: ', scope.TowerMetaData);
                }



                var findInteferringFrequency = function(originalModel, interferringModel)
                {
                    for(var i = 0; i < originalModel.frequencies.length; i++)
                    {
                        for(var j = 0; j < interferringModel.frequencies.length; j++)
                        {
                            if(i == 0)
                            {
                                var locationData = createTowerData(interferringModel);
                            }
                            var freqValue = originalModel.frequencies[i].frequency - interferringModel.frequencies[j].frequency;
                            if(freqValue > -1.160 && freqValue < 1.160)
                            {
                                addTowerInfo(interferringModel, interferringModel.frequencies[j], originalModel.frequencies[i].frequency,'InterferringTower');
                            }
                        }
                    }
                    //console.log('check the TowerMetaData: ', scope.TowerMetaData);
                }

                var createTowerData = function(model)
                {
                    var tempData = [];
                    for (var i = 0; i < model.locations.length;i++)
                    {
                        tempData.push(model.locations[i]);
                    }
                    return tempData;
                }

                var addTowerInfo = function(model, freqInfo, originalModelFreq,type)
                {
                    for(var i = 0; i < model.locations.length; i++)
                    {
                        if(freqInfo.locationNumber === model.locations[i].locationNumber)
                        {
                            var tempArray = _.merge({}, freqInfo, model.locations[i]);
                            tempArray.interferringFreq = originalModelFreq;
                            scope.TowerMetaData[type].frequencies.push(tempArray);
                        }
                    }
                };

                calculateInt(scope.proxLocation);

            }   
        };
    }

    angular.module('fccApp').directive('calculateInterferance', calculateInterferance);
})();
