angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.findYourLocation'
      2) Using $state.go programatically:
        $state.go('tabsController.findYourLocation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.findYourLocation', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/findYourLocation.html',
        controller: 'findYourLocationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/findYourLocation.html',
        controller: 'findYourLocationCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.reviews'
      2) Using $state.go programatically:
        $state.go('tabsController.reviews');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('tabsController.reviews', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/reviews.html',
        controller: 'reviewsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/reviews.html',
        controller: 'reviewsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.writeAReview'
      2) Using $state.go programatically:
        $state.go('tabsController.writeAReview');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page5
      /page1/tab3/page5
  */
  .state('tabsController.writeAReview', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/writeAReview.html',
        controller: 'writeAReviewCtrl'
      },
      'tab3': {
        templateUrl: 'templates/writeAReview.html',
        controller: 'writeAReviewCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.rating'
      2) Using $state.go programatically:
        $state.go('tabsController.rating');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page6
      /page1/tab3/page6
  */
  .state('tabsController.rating', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/rating.html',
        controller: 'ratingCtrl'
      },
      'tab3': {
        templateUrl: 'templates/rating.html',
        controller: 'ratingCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.comments'
      2) Using $state.go programatically:
        $state.go('tabsController.comments');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page7
      /page1/tab3/page7
  */
  .state('tabsController.comments', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/comments.html',
        controller: 'commentsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/comments.html',
        controller: 'commentsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});