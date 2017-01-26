(function () {
    'use strict';

    angular
     .module('app')
     .controller('HomeBodyController', HomeBodyController);

    HomeBodyController.$inject = ['$state','$timeout', '$q', '$log', 'appContextVM', 'HomeDataService'];



    function HomeBodyController($state,$timeout, $q, $log, appContextVM, HomeDataService) {
        var vm = this;
        vm.appContextVM = appContextVM;
        vm.doSearch = doSearch;
        
        HomeDataService.getTutorialTypes();
        HomeDataService.getDefaultlocations();

        function doSearch() {
            $state.transitionTo('searchresult');
        }
    }
})();