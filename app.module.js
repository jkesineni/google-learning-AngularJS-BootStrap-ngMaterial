angular.module('app', ['ui.router', 'account', 'pageslide-directive', 'ngMaterial', 'ngMessages'])
  .config([
    '$stateProvider', '$urlRouterProvider', '$qProvider', '$mdThemingProvider', '$mdIconProvider', function ($stateProvider, $urlRouterProvider, $qProvider, $mdThemingProvider, $mdIconProvider) {

        $mdIconProvider
                     .defaultIconSet("./assets/svg/avatars.svg", 128)
                     .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                     .icon("share"      , "./assets/svg/share.svg"       , 24)
                     .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                     .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                     .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                     .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red');

    $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: 'app/view/home/home.html'
        },
        'header1@home': {
            templateUrl: 'app/view/home/home-header.html'
        },
        'body@home': {
            templateUrl: 'app/view/home/home-body.html'
        },
        'footer@home': {
            templateUrl: 'app/view/home/home-footer.html'
        }
      }
    })
    .state('about', {
            url: '/About',
            views: {
                '': {
                    templateUrl: 'app/view/about/aboutus.html'
                },
                'header@about': {
                    templateUrl: 'app/view/home/home-header.html'
                },
                'body@about': {
                    templateUrl: 'app/view/about/aboutus-body.html'
                },
                'footer@about': {
                    templateUrl: 'app/view/home/home-footer.html'
                }
            }
    })
        .state('signin', {
            url: '/SignIn',
            views: {
                '': {
                    templateUrl: 'app/view/account/signin.html'
                },
                'header@signin': {
                    templateUrl: 'app/view/home/home-header.html'
                },
                'body@signin': {
                    templateUrl: 'app/view/account/signin-body.html'
                },
                'footer@signin': {
                    templateUrl: 'app/view/home/home-footer.html'
                }
            }
        })
        .state('searchresult', {
            url: '/SearchResult',
            views: {
                '': {
                    templateUrl: 'app/view/search/search_result.html'
                },
                'header@searchresult': {
                    templateUrl: 'app/view/search/search_result_header.html'
                },
                'body@searchresult': {
                    templateUrl: 'app/view/search/search_result_body.html'
                },
                'footer@searchresult': {
                    templateUrl: 'app/view/home/home-footer.html'
                }
            }
        });
    }])
.run(['$state', function ($state) {
   $state.transitionTo('home');
}])
