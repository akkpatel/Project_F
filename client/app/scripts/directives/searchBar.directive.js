(function () {
    'use strict';

    searchBar.$inject = ['getFccService', 'EditContext', '_'];

    function searchBar(getFccService, EditContext, _) {
        return {
            restrict: 'E',
            templateUrl: 'views/searchBar.html',
            replace: true,
            scope: true,
            link: function (scope)
            {
                scope.callSign = "";
                scope.FRN = "";

                scope.onSubmitClick = function(){
                    if(scope.callSign || scope.FRN)
                    {
                        EditContext.model.setSearchParameter(scope.callSign, scope.FRN);
                        getFccService.getCallSign(scope.callSign).then(function(response){
                            EditContext.model.currentDataModel = _.cloneDeep(response);
                            for(var i=0;i<response.length;i++){
                               console.log(response[i]);
                                //console.log(users[i].lastName);
                            }
                        }); 
                    }

                }

            }   
        };
    }

    angular.module('fccApp').directive('searchBar', searchBar);
})();
