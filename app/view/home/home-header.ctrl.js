(function () {
    'use strict';

    angular
      .module('app')
      .controller('HomeHeaderContoller', HomeHeaderContoller);

    HomeHeaderContoller.$inject = ['HomeDataService', '$state', 'appContextVM'];

    function HomeHeaderContoller(HomeDataService, $state, appContextVM) {
        var vm = this;
        vm.appContextVM = appContextVM;
        vm.title = 'Home';

        vm.toggle = toggle;
        vm.go2Navigate = go2Navigate;

        //   vm.checked = false;
        vm.size = '100px';


        function go2Navigate(page) {
            vm.appContextVM.setGlobalMenuState(!vm.appContextVM.getGlobalMenuState());
            $state.transitionTo(page);
        }
        function toggle() {
            vm.appContextVM.setGlobalMenuState(!vm.appContextVM.getGlobalMenuState());
        }

    }
})();