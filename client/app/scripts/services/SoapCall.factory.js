(function () {
    'use strict';

    /**
     * The service model is what is used as the serialized version that is shared between client/server
     * @itemType {string[]}
     *
     * More refactoring to come with changes to grading Form/selectbox/valid rules
     */

    SoapCall.$inject = ['$q']; // todo? 'itemModelValidationService'

    function SoapCall($q) {
        return {
            post: function(url, action, params){
                var deferred = $q.defer();
                
                //Create SOAPClientParameters
                var soapParams = new SOAPClientParameters();
                for(var param in params){
                    soapParams.add(param, params[param]);
                }
                
                //Create Callback
                var soapCallback = function(e){
                    if(e.constructor.toString().indexOf("function Error()") != -1){
                        deferred.reject("An error has occurred.");
                    } else {
                        deferred.resolve(e);
                    }
                }
                
                SOAPClient.invoke(url, action, soapParams, true, soapCallback);

                return deferred.promise;
            },
            setCredentials: function(username, password){
                SOAPClient.username = username;
                SOAPClient.password = password;
            }
        }
    }
    angular.module('fccApp').factory('SoapCall', SoapCall);
})();
