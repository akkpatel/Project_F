(function () {
    'use strict';

    mapDraw.$inject = [];

    function mapDraw() {
        return {
            restrict: 'E',
            templateUrl: 'views/mapDraw.html',
            replace: true,
            scope: {
                model: '='
            },
            link: function ($scope)
            {

                // console.log('check the model: ', $scope.model);
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
                                frequencies: $scope.model.frequencies
                            };
                            locationArray.push(item);
                        }
                    };
                    console.log('check the locationArray ', locationArray);
                }
                getLatLong();

var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];

        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(40.0000, -98.0000),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];
    
        var infoWindow = new google.maps.InfoWindow();
    
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lon),
                title: info.city,
                frequencies: info.frequencies
            });
            marker.content = '<div class="infoWindowContent">' + 'Hello world' + '</div>';
        
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
        
            $scope.markers.push(marker);
        
        }  
    
        for (var i = 0; i < locationArray.length; i++){
            createMarker(locationArray[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

            }   
        };
    }

    angular.module('fccApp').directive('mapDraw', mapDraw);
})();
