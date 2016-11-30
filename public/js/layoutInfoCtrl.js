var cmpe226= angular.module('app',[]);
 cmpe226.controller('layoutInfoCtrl', function($scope, $http, $location) {
	
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
	
	$scope.logout = function()
	{
		
		window.location.assign("/logout");
	}
	
	
	 $scope.next = function() {
		 
		 
		 var layout = $scope.layout;
		 var number = $scope.number;
		 var newLayout = $scope.newLayout;
		 var newNumber = $scope.newNumber;
		 var customLayout = $scope.customLayout;
		 var customNumber = $scope.customNumber;
		 var htLength = $scope.htLength;
		 var ltLength = $scope.ltLength;
		 var htDeadends = $scope.htDeadends;
		 var ltDeadends = $scope.ltDeadends;
		 
		 $http({
				method : "POST",
				url : '/storeLayoutInfo',
				data : {
					"layout" : layout,
					"number" : number,
					"newLayout" : newLayout,
					"newNumber" : newNumber,
					"customLayout" : customLayout,
					"customNumber" : customNumber,
					"htLength" : htLength,
					"ltLength" : ltLength,
					"htDeadends" : htDeadends,
					"ltDeadends" : ltDeadends
				}
			}).success(function(data) {
				//checking the response data for statusCode
				if (data.statusCode == 401) {
					console.log("error in storing sessions");
				}
				else
					//Making a get call to the '/redirectToHomepage' API
					window.location.assign("/getMaterialInfoPage");
					
			}).error(function(error) {
					console.log(error);
			});
		 
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
		 
		 window.location.assign("/getMaterialInfoPage");
		 
	 }
	 
	 $scope.back = function() {
		 window.location.assign("/getDevInfoPage"); 
	 }
	 
 });
 