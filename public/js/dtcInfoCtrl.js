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
	
	$scope.logout = function()
	{
		
		window.location.assign("/logout");
	}
	
	
	 $scope.submit = function() {
		 var dtc = $scope.dtc;
		 $http({
				method : "POST",
				url : '/storeDtcInfo',
				data : {
					"dtc" : dtc
				}
			}).success(function(data) {
				//checking the response data for statusCode
				if (data.statusCode == 401) {
					console.log("error in storing sessions");
					
				}
				else
					{
					
					console.log("data from sessions are : ");
					console.log(JSON.stringify(data));
					window.location.assign("/displayReport");
					}
				
			}).error(function(error) {
					console.log(error);
			});
		 
	 }
	 
	 $scope.back = function() {
		 window.location.assign("/getMaterialInfoPage"); 
	 }
	 
 });
 