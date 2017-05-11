// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('NikeApp', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.feed', {
    url: '/feed',
    views: {
      'tab-feed': {
        templateUrl: 'templates/tab-feed.html',
        controller: 'FeedController'
      }
    }
  })

	.state('tab.protips', {
    url: '/protips',
    views: {
      'tab-feed': {
        templateUrl: 'templates/tab-seanmalto.html',
				controller: 'FeedController'
      }
    }
  })

	.state('tab.likes', {
    url: '/likes',
    views: {
      'tab-feed': {
        templateUrl: 'templates/tab-likes.html',
				controller: 'FeedController'
      }
    }
  })

  .state('tab.mystore', {
      url: '/mystore',
      views: {
        'tab-mystore': {
          templateUrl: 'templates/tab-mystore.html',
          controller: 'MyStoreController'
        }
      }
    })

		.state('tab.products', {
	      url: '/products/:shoeId',
	      views: {
	        'tab-mystore': {
	          templateUrl: 'templates/tab-productpage.html',
	          controller: 'ProductDetailController'
	        }
	      }
	    })

  .state('tab.services', {
    url: '/services',
    views: {
      'tab-services': {
        templateUrl: 'templates/tab-services.html',
        controller: 'ServicesController'
      }
    }
  })

	.state('tab.inbox', {
    url: '/inbox',
    views: {
      'tab-inbox': {
        templateUrl: 'templates/tab-inbox.html',
				controller:'InboxController'
      }
    }
  })

	.state('tab.messages', {
			url: '/messages/:messageId',
			views: {
				'tab-inbox': {
					templateUrl: 'templates/tab-messages.html',
					controller: 'InboxController'
				}
			}
		})

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/feed');

});
