(function () {
    'use strict';

    angular
      .module('app')
      .controller('AboutUsContoller', AboutUsContoller);

    AboutUsContoller.$inject = ['$state', 'appContextVM'];

    function AboutUsContoller($state, appContextVM) {
        var vm = this;
        vm.appContextVM = appContextVM;
        vm.title = 'AboutUs';

        vm.go2Home = go2Home;

        function go2Home() {
             $state.transitionTo('home');
        }
      
    }
})();