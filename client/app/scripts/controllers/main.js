    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('fccApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'EditContext'];
   function MainCtrl($scope, EditContext) {

        $scope.model = EditContext.model;
        $scope.$watch('model', function(newValue){
            $scope.dataModel = newValue.currentDataModel;
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
        
    }
})();
    /* jshint ignore:end */
