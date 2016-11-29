var cmpe226= angular.module('app',[]);
 cmpe226.controller('materialInfoCtrl', function($scope, $http, $location) {
	
	$scope.getDevInfoPage = function()
	{
		console.log("getting dev page");
		window.location.assign("/getDevInfoPage");
	}
	
	$scope.getLayoutInfoPage = function()
	{
		console.log("getting layout page");
		window.location.assign("/getLayoutInfoPage");
	}
	
	$scope.getMaterialInfoPage = function()
	{
		console.log("getting material page");
		window.location.assign("/getMaterialInfoPage");
	}
	
	$scope.getDTCInfoPage = function()
	{
		console.log("getting DTC page");
		window.location.assign("/getDTCInfoPage");
	}
	
	 $scope.next = function() {
		 var rcText = $scope.rcText;
		 var htText = $scope.htText;
		 var ltText = $scope.ltText;
		 var option1 = $scope.log.Option 1;
		 var customLayout = $scope.customLayout;
		 var customNumber = $scope.customNumber;
		 var htLength = $scope.htLength;
		 var ltLength = $scope.ltLength;
		 var htDeadends = $scope.htDeadends;
		 var ltDeadends = $scope.ltDeadends;
		 
		 
		 console.log(layout);
		 console.log(number);
		 console.log(newLayout);
		 console.log(newNumber);
		 console.log(customLayout);
		 console.log(customNumber);
		 console.log(htLength);
		 console.log(ltLength);
		 console.log(htDeadends);
		 console.log(ltDeadends);
		
		 console.log("********************");
		 
		 window.location.assign("/getDTCInfoPage");
		 
	 }
	 
	 $scope.back = function() {
		 window.location.assign("/getLayoutInfoPage"); 
	 }
	 
 });
 