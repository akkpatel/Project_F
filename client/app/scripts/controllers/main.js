    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('fccApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'EditContext', '_'];
   function MainCtrl($scope, EditContext, _) {

        var addLocationInfo = function(model)
        {
            for(var i = 0; i < model.locations.length; i++)
            {
                for(var j = 0; j < model.frequencies.length; j++)
                {
                    if(model.locations[i].locationNumber === model.frequencies[j].locationNumber)
                    {
                        _.merge(model.frequencies[j], model.locations[i]);
                    }   
                }
            }
        }

        $scope.model = EditContext.model;
        $scope.$watch('model', function(newValue){
            if(newValue.currentDataModel){
                var model = newValue.currentDataModel;
                addLocationInfo(model);
                $scope.dataModel = model;
            }
        }, true);

        // var authInfo = {
        //     appKey: "11168829",
        //     username: "akkpatel",
        //     password: "Computer#1"
        // }
        // var callSign = "WZZ918";
        // var pl = new SOAPClientParameters();
        // pl.add("callsign",callSign);
        // pl.add("authInfo", authInfo);
        // SOAPClient.invoke(base_url, "fccGetCallsign", pl, true, HelloTo_callBack);


        // function HelloTo_callBack(r)
        // {
        //     //alert(r);
        //     console.log('check the r: ', r);
        // }
        // getFccService.getCallSign(callSign, authInfo).then(function(response){
        // 	console.log('check the response: ', response);
        // });	
        // testService.getUserData(authInfo).then(function(response){
        //  console.log('check the response: ', response);
        // });

//     var cities = [
//     {
//         city : 'Toronto',
//         desc : 'This is the best city in the world!',
//         lat : 43.7000,
//         long : -79.4000
//     },
//     {
//         city : 'New York',
//         desc : 'This city is aiiiiite!',
//         lat : 40.6700,
//         long : -73.9400
//     },
//     {
//         city : 'Chicago',
//         desc : 'This is the second best city in the world!',
//         lat : 41.8819,
//         long : -87.6278
//     },
//     {
//         city : 'Los Angeles',
//         desc : 'This city is live!',
//         lat : 34.0500,
//         long : -118.2500
//     },
//     {
//         city : 'Las Vegas',
//         desc : 'Sin City...\'nuff said!',
//         lat : 36.0800,
//         long : -115.1522
//     }
// ];

//         var mapOptions = {
//             zoom: 4,
//             center: new google.maps.LatLng(40.0000, -98.0000),
//             mapTypeId: google.maps.MapTypeId.TERRAIN
//         }

//         $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

//         $scope.markers = [];
    
//         var infoWindow = new google.maps.InfoWindow();
    
//         var createMarker = function (info){
        
//             var marker = new google.maps.Marker({
//                 map: $scope.map,
//                 position: new google.maps.LatLng(info.lat, info.long),
//                 title: info.city
//             });
//             marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
//             google.maps.event.addListener(marker, 'click', function(){
//                 infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
//                 infoWindow.open($scope.map, marker);
//             });
        
//             $scope.markers.push(marker);
        
//         }  
    
//         for (var i = 0; i < cities.length; i++){
//             createMarker(cities[i]);
//         }

//         $scope.openInfoWindow = function(e, selectedMarker){
//             e.preventDefault();
//             google.maps.event.trigger(selectedMarker, 'click');
//         }
    }
})();
    /* jshint ignore:end */
