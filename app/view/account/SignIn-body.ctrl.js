(function () {
    'use strict';

    angular
      .module('app')
      .controller('SignInContoller', SignInContoller);

    SignInContoller.$inject = ['$state', 'appContextVM', 'SignInVM', 'AccountDataService'];

    function SignInContoller($state, appContextVM, SignInVM, AccountDataService) {
        var vm = this;
        vm.appContextVM = appContextVM;
        vm.SignInVM = SignInVM;
        vm.title = 'SignIn';

        vm.go2Home = go2Home;
        vm.doSignIn = doSignIn;
        
        function doSignIn() {
            AccountDataService.doSignIn();
        }

        function go2Home() {
            $state.transitionTo('home');
        }

    }
})();