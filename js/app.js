var portal = angular.module('portal', ['ui.router', 'portal.controllers', 'portal.directives'],
  ['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }]);

var portalDirectives = angular.module('portal.directives', []);
var portalControllers = angular.module('portal.controllers', []);

portalControllers.config(['$controllerProvider', 
  function($controllerProvider) {
    portalControllers.register = {
      controller: $controllerProvider.register
    };
}]);

portal.constant('CONTROLLER_PATHS', {
  'portalController': {
    path: '/js/controllers/portal.controller.js',
    loaded: false
  }
  'secondPageController': {
    path: '/js/controllers/secondpage.controller.js',
    loaded: false
  }
})

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$uiViewScrollProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider, $uiViewScrollProvider) {

    $uiViewScrollProvider.useAnchorScroll();

    // Routes
    $stateProvider
      .state('portal', {
        url: '/',
        templateUrl: 'partials/portal.html',
        data: {
          title: 'Portal'
        }
      })
      .state('secondpage', {
        url: '/secondpage',
        templateUrl: 'partials/secondpage.html',
        data: {
          title: 'Second Page'
        }
      });

    $urlRouterProvider.otherwise('/');

  }
])
.run(['$rootScope', '$state', '$window',
  function($rootScope, $state, $window) {
    $rootScope.goBack = function() {
      window.history.back();
    };
  }
]);