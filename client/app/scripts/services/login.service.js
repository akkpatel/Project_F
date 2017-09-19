    /* jshint ignore:start */
(function () {
	'use strict';

	angular.module('fccApp').factory('LoginService', impl);

	impl.$inject = ['TokenService', 'UserInfo'];

	function impl(TokenService, UserInfo) {
		var userKey = 'ccg_user_key';
		var userInfo = function ()
		{

		}
        var logout = function () {
			sessionStorage.removeItem(userKey);
			TokenService.setAuthToken(null);
            $state.go('login');
		};

		var authenticate = function (username, password)
		{
			console.log('we are in authenticate');
			if(username === UserInfo.user && password === UserInfo.pass)
			{
				if(UserInfo.token)
				{
					sessionStorage.setItem(userKey, username);
					TokenService.setAuthToken(UserInfo.token);
				}
				return UserInfo.user;
			}else{
				console.log('Authentication Error ');
			}

		};


		// var authenticate = function (username, password) {
		//     var url = DiscoveryService.getServicePath(SERVICES.LOGIN);
		//     var redirectUrl = $stateParams.redirectUrl;
		//     if (redirectUrl)
		//     {
  //               url += (url.indexOf('?') > -1 ? '&' : '?') + 'redirect_url=' + redirectUrl;
		//     }
		// 	var data = {
		// 		username: username,
		// 		password: password
		// 	};

		// 	return $http.post(url, data)
		// 		.then(function (response) {
		// 			if (response.status === 200)
		// 			{
		// 				var stateParams = null;
		// 				if (response.data.token) {
		// 					sessionStorage.setItem(userKey, username);
		// 					TokenService.setAuthToken(response.data.token);
		// 					$rootScope.$emit('ccgAuthenticated');
		// 				}
		// 				if(response.data && response.data.redirect_url){
		// 					stateParams = UrlRedirectionService.convertRedirectUrl(response.data.redirect_url);
		// 					console.log('check the stateparams: ', stateParams);
  //                       }
		// 				return $q.resolve({data: response.data, params: stateParams});
		// 			}else {
  //                       $rootScope.$emit('ccgError', { desc: 'Login Failed', next: '' }, response);
  //                       return $q.reject({ desc: 'Login Failed', next: '' }, response);
		// 			}



		// 		})
		// 		.catch(function (err) {
		// 			logout();

  //                   $rootScope.$emit('ccgError', { desc: 'Login Failed', next: '' }, err);
  //                   return $q.reject({ desc: 'Login Failed', next: '' }, err);
		// 		});
		// };

		var getLoggedInUser = function () {
			return sessionStorage.getItem(userKey);
		};

		/* This defines the public interface */
		return {
			authenticate: authenticate,
			logout: logout,
			getLoggedInUser: getLoggedInUser
		};
	}
})();
    /* jshint ignore:end */
