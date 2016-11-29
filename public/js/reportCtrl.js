var cmpe226= angular.module('app',[]);
cmpe226.controller('reportCtrl', function($scope, $http, $location) {
	
	  $scope.reportDetails = {};   
	$scope.displayReport = function()
	{
		$http({
			method : 'POST',			
			url : '/getReportDetails',
			data: {}
		}).success(function(response) {		
			
			console.log("inside report controller: ");
			console.log(response.data);
			$scope.reportDetails = response;
			console.log($scope.reportDetails);
		});
	}
	
	
});