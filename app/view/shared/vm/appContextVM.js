(function () {
    'use strict';

    angular
        .module('app')
        .factory('appContextVM', appContextVM)

    function appContextVM() {

        var state = "";
        var message = "";
        var globalMenuState = false;
        var tutorialTypes = [];
        var locations = [];

        return {
            getLocations: function () {
                if (this.locations != undefined) {
                    this.locations = new Array();
                };
                return this.locations;
            },
            setLocations: function (location) {
                if (this.locations == undefined) {
                    this.locations = new Array();
                    this.locations.push(location);
                } else {
                    this.locations.push(location);
                }
            },
            getTutorialTypes:function(){
                if (this.tutorialTypes != undefined) {
                    this.tutorialTypes = new Array();
                };
                return this.doctorTypes;
            },
            setTutorialTypes:function(type){
                if (this.tutorialTypes == undefined) {
                    this.tutorialTypes = new Array();
                    this.tutorialTypes.push(type);
                } else {
                    this.tutorialTypes.push(type);
                }
            },
            clearTutorialTypes: function(){
                this.tutorialTypes = new Array();
            },
            getGlobalMenuState: function () {
                return this.globalMenuState;
            },
            setGlobalMenuState: function (globalMenuState) {
                this.globalMenuState = globalMenuState;
            },
            getState: function () {
                return this.state;
            },
            setState: function (state) {
                this.state = state;
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