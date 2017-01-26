(function () {
    'use strict';

    angular
      .module('app')
      .controller('HomeContoller', HomeContoller);

    HomeContoller.$inject = ['HomeDataService', '$state', 'appContextVM'];

    function HomeContoller(HomeDataService, $state, appContextVM) {
        var vm = this;
        vm.appContextVM = appContextVM;
        vm.title = 'Home';

        vm.toggle = toggle;
     //   vm.checked = false;
        vm.size = '100px';

        function toggle() {
            vm.appContextVM.setGlobalMenuState(!vm.appContextVM.getGlobalMenuState());
        }

    }
})();