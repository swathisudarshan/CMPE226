var cmpe226= angular.module('app',[]);
 cmpe226.controller('devInfoCtrl', function($scope, $http, $location) {
		 
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
	
	
	 $scope.addDevInfo = function() {
		
		 var customerName = $scope.customerName;
		 var surveyNumber = $scope.surveyNumber;
		 var address = $scope.address;
		 var district = $scope.district;
		 var cityTown = $scope.cityTown;
		 var village = $scope.village;
		 var section = $scope.section;
		 var csd = $scope.csd;
		 
		 $http({
				method : "POST",
				url : '/storeDevInfo',
				data : {
					"customerName" : customerName,
					"surveyNumber" : surveyNumber,
					"address" : address,
					"district" : district,
					"cityTown" : cityTown,
					"village" : village,
					"section" : section,
					"csd" : csd
				}
			}).success(function(data) {
				//checking the response data for statusCode
				if (data.statusCode == 401) {
					console.log("error in storing sessions");
				}
				else
					//Making a get call to the '/redirectToHomepage' API
					window.location.assign("/getLayoutInfoPage");
					
			}).error(function(error) {
					console.log(error);
			});
	 }
	 
 });
 