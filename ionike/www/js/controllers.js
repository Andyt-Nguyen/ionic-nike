angular.module('starter.controllers', [])

.controller('FeedController', function($scope, $ionicActionSheet,$timeout, $ionicModal) {

		$scope.liked;
		$scope.heartRed = function(){
			$scope.liked = !$scope.liked;
			console.log($scope.liked);
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

 //Comments Below
 	$scope.comments = [
		{name:'John Long Silver', message:'That was so sick', thumb:'http://vignette3.wikia.nocookie.net/pirates/images/7/70/Jack_Sparrow.JPG/revision/latest?cb=20121118005724',liked:true},
		{name: 'Oprah', message: 'Free skateboards for everyone', thumb:'http://static.oprah.com/images/tows/201104/20110413-oprah-whiteshirt-600x411.jpg',liked:true},
		{name: 'Nanny Huff', message:"You dont know anyone named Johnny Hopkins", thumb:"http://static.wixstatic.com/media/50f3f12a1bbffa6f2b889b1906df9473.wix_mp_512",liked:true},
		{name:"Brenan Huff", message:"It was Johnny Hopkins, and Sloan Kettering. And they were blazin' that s**t up every day.", thumb:"https://lh3.googleusercontent.com/-LUhmTbiQb-0/Uq6-8Irs_8I/AAAAAAAAAB0/d9eOqIYSJfI/s448-p/photo.jpg",liked:true}
	];


	$scope.createMessage = function(userMessage){
		$scope.comments.push({
			name: "Anonymous",
			message: userMessage.message,
			thumb:"http://www.shannonillinois.com/wp-content/uploads/2015/11/default_staffmale.jpg",
		});

		console.log($scope.comments);
		$scope.modal.hide();
		console.log($scope.userMessage);
	};

	  $ionicModal.fromTemplateUrl('templates/modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	  $scope.openModal = function() {
	    $scope.modal.show();
	  };
	  $scope.closeModal = function() {
	    $scope.modal.hide();
	  };
	  // Cleanup the modal when we're done with it!
	  $scope.$on('$destroy', function() {
	    $scope.modal.remove();
	  });
	  // Execute action on hide modal
	  $scope.$on('modal.hidden', function() {
	    // Execute action
	  });
	  // Execute action on remove modal
	  $scope.$on('modal.removed', function() {
	    // Execute action
	  });

})

.controller('MyStoreController', function($scope, Chats) {

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
