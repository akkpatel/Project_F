    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('fccApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'LoginService'];
    function LoginController($state, LoginService) {
        console.log('I am in login controller');
        var vm = this;

        vm.credentials = {
            username: null,
            password: null
        };

        vm.onSubmit = function()
        {
            var authenticated = LoginService.authenticate(vm.credentials.username, vm.credentials.password);
            if(authenticated)
            {
                $state.go('home');
            }else
            {
                console.log('you have entered invalid response');
            }
        }
    }
})();
    /* jshint ignore:end */
