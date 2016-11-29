var sensorApp= angular.module('sensorApp',[]);
 sensorApp.controller('mainPageCtrl', function($scope, $http, $location) {
 $scope.signup=function(){	
	 console.log("inside mainpage ctrl --inside signup controller");
      		window.location.assign("/signup");
    };   
    
    $scope.login=function(){	
   	 console.log("inside mainpage ctrl --login controller");
     window.location.assign("/login");
    }; 
    
      $scope.index=function(){	
    	  console.log("inside mainpage ctrl --home controller");
    	  window.location.assign("/home");
    };
   
    $scope.addUser = function(){
    	console.log("inside mainpage ctrl -- sign up of a user");
    	console.log("email is: "+$scope.email);
    	console.log("password is: "+$scope.pswrd);
    	console.log("phone number is: "+$scope.userid);
    	$http({
    		method : "POST",
    		url : "https://weconnect-imnikhil.c9users.io/api/user/signup",
    		data : {
    			"fname" : $scope.fname,
    			"lname" : $scope.lname,
    			"pswrd" : $scope.pswrd,
    			"email" : $scope.email,
    			"userid" : $scope.userid,
    			"address" : $scope.address
    		}
    	}).success(function (res){
    		if(res.Status == 200)
    		{ 
    			console.log("successfully signed up");
    			$("#success-alert1").show();
	            $("#success-alert1").fadeTo(2000, 1000).slideUp(1000, function(){
	            window.location.assign("/login");
	            });
    		  		
    		}
    		}).error(function (res){
    		console.log("error while sign up");
    	});
    };
    
    $scope.userLogin = function(){
    	console.log("inside mainpage ctrl -- login of a user");
    	console.log("phone number is: "+$scope.userid);
    	console.log("password is: "+$scope.pswrd);
    	$http({
    		method : "POST",
    		url : "https://weconnect-imnikhil.c9users.io/api/user/login",
    		data : {
    			"userid" : $scope.userid,
    			"pswrd" : $scope.pswrd
    			}
    	}).success(function (res) {
    		console.log("The return value: "+JSON.stringify(res));
    		if(res.Success == 200)
    		{ 
    			console.log("successfully loggedin");
	            window.location.assign("/getDevInfoPage");	
    		}
    		else
    		{
    			console.log("Auhentication failure after success");
    		}
    		
    		}).error(function (error){
    		console.log("error while login: " +error);
    	});
    };
       
});