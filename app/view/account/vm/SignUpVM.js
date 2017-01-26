(function () {
    'use strict';

    angular
        .module('app')
        .factory('SignUpVM', SignUpVM);

    function SignUpVM() {

        var firstName = "";
        var lastName = "";
        var contactNumber = "";
        var emailId = "";

        return {
            getFirstName: function () {
                return this.firstName;
            },
            setFirstName: function (firstName) {
                this.firstName = firstName;
            },
            getLastName: function () {
                return this.lastName;
            },
            setLastName: function (lastName) {
                this.lastName = lastName;
            },
            getContactNumber: function () {
                return this.contactNumber;
            },
            setContactNumber: function (contactNumber) {
                this.contactNumber = contactNumber;
            },
            getEmailId: function () {
                return this.emailId;
            },
            setEmailId: function (emailId) {
                this.emailId = emailId;
            }
        }
    }

})();