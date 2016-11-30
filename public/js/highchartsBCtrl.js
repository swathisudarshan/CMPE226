var cmpe226= angular.module('app',[]);
 cmpe226.controller('highchartsBCtrl', function($scope, $http, $location) {
	
	$scope.getDevInfoPage = function()
	{
		console.log("inside Admin dashboard controller");
		window.location.assign("/getAdminDashInfoPage");
	}
	
	$scope.getHighchartsAInfoPage = function()
	{
		console.log("inside Highcharts A controller");
		window.location.assign("/getHighchartsAInfoPage");
	}
	
	$scope.getHighchartsBInfoPage = function()
	{
		console.log("inside Highcharts B controller");
		window.location.assign("/getHighchartsBInfoPage");
	} 
 });