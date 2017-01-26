angular.module('account', ['ui.router'])
  .config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/');
        //$stateProvider
        //    .state('signin', {
        //        url: '/SignIn',
        //        views: {
        //            '': {
        //                templateUrl: 'app/view/account/account-signin.html'
        //            },
        //            'header@signin': {
        //                templateUrl: 'app/view/shared/header/app-header.html'
        //            },
        //            'body@signin': {
        //                templateUrl: 'app/view/about/aboutus-body.html'
        //            },
        //            'footer@signin': {
        //                templateUrl: 'app/view/shared/footer/app-footer.html'
        //            }
        //        }
        //    });
    }]);
