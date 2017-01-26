(function () {
    'use strict';

    angular
      .module('app')
      .factory('HomeDataService', HomeDataService);

    HomeDataService.$inject = ['$http', '$sce','$window', 'appContextVM', 'googleLearningURL', 'googleLearningConfig'];

    function HomeDataService($http,$sce, $window, appContextVM, googleLearningURL, googleLearningConfig) {
        var vm = this;
        vm.appContextVM = appContextVM;
      
        var service = {
            getDefaultlocations: getDefaultlocations,
            getTutorialTypes: getTutorialTypes,
        };

        return service;
        var locations_url = String(googleLearningURL.DOMAIN + googleLearningConfig.LOCATIONS);
        function getDefaultlocations() {
            $http({
                method: "POST",
                url: $sce.trustAsResourceUrl('http://google.com'),
                headers: { 'Access-Control-Allow-Origin': '*' },
                crossDomain: true,
            }).then(function (response) {
                if (response.data != undefined) {

                    for (var i = 0; i < response.data.length; i++) {
                        vm.appContextVM.setLocations(response.data[i]);
                    }
                }
            }, function error(response) {

                vm.appContextVM.setMessage(response.data);
            });
        }

        function getTutorialTypes() {

            /* NOTE: Just mock */          
            var InsituteOption = {
                'type': 'Institutions',
                'id': '001',
            }
            vm.appContextVM.setTutorialTypes(InsituteOption);
            
            var Training = {
                'type': 'Learning AngularJS',
                'id': '001',
            }
            vm.appContextVM.setTutorialTypes(Training);

            var types_url = String(googleLearningURL.DOMAIN + googleLearningConfig.TUTORIAL_TYPES);
            $http({
               method: "GET",
               url: $sce.trustAsResourceUrl('http://google.com'),
               headers: { 'Access-Control-Allow-Origin': '*' },
               crossDomain: true,
            }).then(function (response)
            {
                if (response.data != undefined) {
                    var hospiOption = {
                        'type': 'Institutions',
                        'id': '001',
                    }
                    vm.appContextVM.setDoctorTypes(hospiOption);
                    for (var i = 0; i < response.data.length; i++) {
                        vm.appContextVM.setDoctorTypes(response.data[i]);
                    }
                }
            }, function error(response) {
               
                vm.appContextVM.setMessage(response.data);
           });
        }


    }



})();