(function () {
    'use strict';

    angular
      .module('app')
      .constant('googleLearningURL', {
          SIGNUP: 'http://xxxxxxx',
          SIGNIN: '/members/login',
          TUTORIAL_TYPES: 'learning/types',
      });
})();