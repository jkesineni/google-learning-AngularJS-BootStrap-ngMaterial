(function () {
    'use strict';

    angular
      .module('account')
      .factory('AccountDataService', AccountDataService);

    AccountDataService.$inject = ['$http', '$window', 'SignInVM', 'SignUpVM', 'googleLearningURL', 'googleLearningConfig'];
   
    function AccountDataService($http, $window, SignInVM, SignUpVM, googleLearningURL, googleLearningConfig) {
        var vm = this;
        vm.SignInVM = SignInVM;
        vm.SignUpVM = SignUpVM;

        var signInInfo = "";
        var signUpInfo = "";

        var service = {
            doSignIn: doSignIn,
            doSignOut: doSignOut,
            doSignUp: doSignUp,
        };
        
        return service;

        function doSignIn() {
            $http({
                method: "POST",
                url: googleLearningConfig.DOMAIN + googleLearningURL.SIGNIN,
                data: { username: SignInVM.getUserName(), password: SignInVM.getPassword() },
                headers: { 'Access-Control-Allow-Origin': '*' },
                crossDomain: true
            }).then(function (response) {
                if (response.status == 200 && response.data == "") {
                   
                    //gotoDashBoard(response);
                }
                else if (response.status == 200 && response.data == "INVALID_USERNAME") {
                    SignInVM.setMessage("you entered wrong  UserName");
                }
                else if (response.status == 200 && response.data == "INVALID_PASSWORD") {
                    SignInVM.setMessage("you entered wrong  password");
                }
                else {
                    SignInVM.setMessage(" you entered wrong values");
                }

            }, function error(response) {

                SignInVM.setMessage(response.data);
            });
           
        }

        function doSignOut() {

        }

        function doSignUp() {

        }

    }



})();