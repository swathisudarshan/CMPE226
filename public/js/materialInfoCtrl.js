var cmpe226= angular.module('app',[]);
 cmpe226.controller('materialInfoCtrl', function($scope, $http, $location) {
	console.log("Inside Material info controller");
	
	$scope.acc=[{name:'option1'},
	                   {name:'option2'},
	                   {name:'option3'},
	                   {name:'option4'},
	                   {name:'option5'},
	                   {name:'option6'},
	                   {name:'option7'},
	                   {name:'option8'},
	                   {name:'option9'},
	                   {name:'option10'}];
	              $scope.selection=[];
	              // toggle selection for a given employee by name
	              $scope.toggleSelection = function toggleSelection(accs) {
	                 var idx = $scope.selection.indexOf(accs);
	             
	                 // is currently selected
	                 if (idx > -1) {
	                   $scope.selection.splice(idx, 1);
	                 }
	             
	                 // is newly selected
	                 else {
	                   $scope.selection.push(accs);
	                 }
	            console.log($scope.selection);
	               };
	
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
	
	 $scope.addMaterialInfo = function() {
		 var rcText = $scope.rcText;
		 var ltText = $scope.ltText;
		 var htText = $scope.htText;
		 
		 console.log(rcText);
		 console.log(ltText);
		 console.log(htText);
		 console.log("********");
		 window.location.assign("/getDTCInfoPage");
	 }
	 
	 $scope.back = function() {
		 window.location.assign("/getLayoutInfoPage"); 
	 }
	 
	 $scope.next = function() {
		 window.location.assign("/getDTCInfoPage"); 
	 }
	 
	 $scope.logout = function()
		{
			
			window.location.assign("/logout");
		}
		

   });