angular.module('starter.controllers', [])

.controller('FeedController', function($scope, $ionicActionSheet,$timeout) {

		$scope.liked = false;
		$scope.heartRed = function(){
			$scope.liked = !$scope.liked;
		};

	// Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: "<div class='icon-modal'><i class='ion-social-facebook feed-face'></i> <i class='ion-ios-flower-outline feed-image'></i> <i class='ion-ios-chatbubble feed-chat'></i> <i class='ion-social-instagram feed-instagram'></i></div>" },
       { text: '<div class="icon-modal-bottom"><i class="ion-paper-airplane feed-plane feed"></i><i class="ion-ios-cloud-upload feed-upload feed"></i></div>' },
     ],
    //  destructiveText: 'Delete',
     titleText: 'Share it with the fellas',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     },
		 cssClass: 'feed-share-modal'

   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 5000);

 };
})

.controller('MyStoreController', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ServicesController', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
