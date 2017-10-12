'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('fccApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'mm.foundation',
    'angularSoap'
  ])
  // attach lodash to the window object, to use globally
  .factory('_', ['$window',
    function($window) {
      return $window._;
    }
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
    .state('root', {
        url: '',
        abstract: true,
        views: {
            'header@': {
                templateUrl: 'views/header.html',
                controller: 'HeaderController'
            },
            'footer@': {
                templateUrl:'views/footer.html'
            }
        },
        navigation : {
            // tools : globalTools
        }
    })
    .state('home', {
      url: '/home',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }   
    });
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/', ['$state','TokenService' ,
      function ($state, TokenService){
                console.log('check the current state: ', $state);
                    if(TokenService.getAuthToken()){
                      $state.go('home');
                    }else{
                        $state.go('home');
                    }
        }]);
  });
