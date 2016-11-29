var cmpe226= angular.module('app',[]);
 cmpe226.controller('dtcInfoCtrl', function($scope, $http, $location) {
	$scope.getDevInfoPage = function()
	{
		console.log("inside dashbpard controller");
		window.location.assign("/getDevInfoPage");
	}
	
	$scope.getLayoutInfoPage = function()
	{
		console.log("inside layout info controller");
		window.location.assign("/getLayoutInfoPage");
	}
	
	$scope.getMaterialInfoPage = function()
	{
		console.log("inside dashbpard controller");
		window.location.assign("/getMaterialInfoPage");
	}
	
	$scope.getDTCInfoPage = function()
	{
		console.log("inside dashbpard controller");
		window.location.assign("/getDTCInfoPage");
	}
	
	
	 $scope.submit = function() {
		 var Option1 = $scope.Option1;
		 var Option2 = $scope.Option2;
		 var Option3 = $scope.Option3;
		 
		 console.log(Option1);
		 console.log(Option2);
		 console.log(Option3);
		 console.log("*****");
		 
	 }
	 
	 $scope.back = function() {
		 window.location.assign("/getMaterialInfoPage"); 
	 }
	 
 });
 