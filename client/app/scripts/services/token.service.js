    /* jshint ignore:start */
(function () { 
	'use strict';
	
	angular.module('fccApp').factory('TokenService', impl);

	impl.$inject = [];

	function impl(){
		var tokenkey = 'ccg-user-token';
		var getAuthToken = function(){
			return sessionStorage.getItem(tokenkey);
		};
		var setAuthToken = function(token){
			if(!token){
				sessionStorage.removeItem(tokenkey);
			}
			sessionStorage.setItem(tokenkey, token);
		};
		var removeAuthToken = function(){
			return sessionStorage.removeItem(tokenkey);
		};
		return {
			setAuthToken: setAuthToken,
			getAuthToken: getAuthToken,
			removeAuthToken: removeAuthToken
		};
	}

})();
    /* jshint ignore:end */