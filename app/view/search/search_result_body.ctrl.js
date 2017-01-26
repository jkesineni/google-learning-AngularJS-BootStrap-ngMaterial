(function () {
    'use strict';

    angular
      .module('app')
      .controller('SearchResultBodyContoller', SearchResultBodyContoller);

    SearchResultBodyContoller.$inject = ['$state', 'appContextVM'];

    function SearchResultBodyContoller($state, appContextVM) {
        var vm = this;
        vm.appContextVM = appContextVM;
        vm.title = 'Search Result';

        vm.go2Home = go2Home;

        function go2Home() {
            $state.transitionTo('home');
        }

    }
})();