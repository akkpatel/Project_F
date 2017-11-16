(function () {
    'use strict';

    drawMap.$inject = [];

    function drawMap() {
        return {
            restrict: 'E',
            templateUrl: 'views/mapDraw.html',
            replace: true,
            scope: {
                model: '=',
                interferModel: '='
            },
            link: function ($scope)
            {

                console.log('check the model: ', $scope.interferModel);
                var locationArray = [];
                var getLatLong = function()
                {
                    var location = $scope.model.locations;
                    var j = 0;
                    for(var i = 0; i < location.length; i++)
                    {
                        if(location[i].lat && location[i].lon)
                        {
                            var item = {
                                lat: location[i].lat,
                                lon: location[i].lon,
                                city: location[i].city,
                                towerId: location[i].towerId,
                                frequencies: $scope.model.frequencies
                            };
                            locationArray.push(item);
                        }
                    };
                    console.log('check the locationArray ', locationArray);
                }
                getLatLong();


        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(40.0000, -98.0000),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];
    
        var infoWindow = new google.maps.InfoWindow();
    
        var createMarker = function (info, icon){
            console.log('check the info in marker: ', info);
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lon),
                title: info.city,
                frequencies: info.frequencies,
                icon: icon
            });
            marker.content = '<div class="infoWindowContent">' + 'Hello world' + '</div>';
        
            google.maps.event.addListener(marker, 'click', function(){
                var exor = info.towerId || info.address;
                infoWindow.setContent('<h2>' + exor + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
        
            $scope.markers.push(marker);
        
        }  

        for (var i = 0; i < locationArray.length; i++){
            createMarker(locationArray[i]);
        }
        var createInterferenceMarker = function(newValue)
        {
            console.log('we are here to draw map: ');
            var icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
            for(var i = 0; i < newValue.length; i++)
            {
                createMarker(newValue[i], icon);   
            }
        }
        $scope.$watch('interferModel', function(newValue, oldValue){
            if(newValue !== oldValue){
                createInterferenceMarker(newValue, '');
            }
        }, true);

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

            }   
        };
    }

    angular.module('fccApp').directive('drawMap', drawMap);
})();
