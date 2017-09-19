(function () {
    'use strict';

    searchBar.$inject = [];

    function searchBar() {
        return {
            restrict: 'E',
            templateUrl: 'views/searchBar.html',
            replace: true,
            scope: true,
            link: function (scope)
            {
                console.log('we are in searchBar');

            }
        };
    }

    angular.module('fccApp').directive('searchBar', searchBar);
})();
