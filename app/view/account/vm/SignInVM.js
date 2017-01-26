(function () {
    'use strict';

    angular
        .module('account')
        .factory('SignInVM', SignInVM);

    function SignInVM() {

        var userName = "";
        var password = "";
        var status = -1;
        var message = "";

        return {
            getUserName: function () {
                return this.userName;
            },
            setUserName: function (userName) {
                this.userName = userName;
            },
            getPassword: function () {
                return this.password;
            },
            setPassword: function (password) {
                this.password = password;
            },
            getStatus: function () {
                return this.status;
            },
            setStatus: function (status) {
                this.status = status;
            },
            getMessage: function () {
                return this.message;
            },
            setMessage: function (message) {
                this.message = message;
            }
        }
    }

})();