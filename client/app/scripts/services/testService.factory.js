    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('fccApp')
        .factory('getFccService', getFccService);

    getFccService.$inject = ['$q', '$soap'];
    function getFccService($q, $soap) {
        var base_url = "http://api.radioreference.com/soap2/index.php";
        var authInfo = {
            appKey: "11168829",
            username: "akkpatel",
            password: "Computer#1"
        }
        //var callSign = "WZZ918";
        // var pl = new SOAPClientParameters();
        // pl.add("callsign",callSign);
        // pl.add("authInfo", authInfo);
        // SOAPClient.invoke(base_url, "fccGetCallsign", pl, true, HelloTo_callBack);

        return {
            CreateUser: function(firstName, lastName){
                return $soap.post(base_url,"CreateUser", {firstName: firstName, lastName: lastName});
            },
            getCallSign: function(callsign){
                return $soap.post(base_url, "fccGetCallsign", {callsign: callsign, authInfo: authInfo});
            },
            getUserData: function(authInfo){
              return $soap.post(base_url, "getUserData", {authInfo: authInfo});  
            },
            sayHi: function(){
                return $q.resolve('Hi');
            }
        }
        
    }
})();
    /* jshint ignore:end */
