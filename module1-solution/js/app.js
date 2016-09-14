(function (){
	'use strict';
	angular.module('LunchCheck', [])
	.controller("LunchCheckController", DIController);

	DIController.$inject = ['$scope'];
	function DIController($scope){
		$scope.lunch = "";
		$scope.comment = "";
		$scope.comment_type = "";
		$scope.check = function (){
			$scope.comment = check_lunch($scope.lunch);
			// console.log($scope);
		}

		function check_lunch(lunch){
			var arr = lunch.split(',');
			var count = 0;
			for(var i = 0; i < arr.length; i++){
				if(arr[i].trim() != "")
					count++;
			}
			if(count == 0)
				$scope.comment_type = "invalid_comment";
			else
				$scope.comment_type = "valid_comment";
			if(count == 0)
				return "Please enter data first";
			else if(count > 3)
				return "Too much!";
			else
				return "Enjoy!";
			
		}
	}

} ) ();

// !function(){"use strict";function n(n){function c(n){for(var c=n.split(";"),u=0,t=0;t<c.length;t++)""!=c[t].trim()&&u++;return u}n.lunch="",n.num=0,n.check=function(){n.num=c(n.lunch)}}angular.module("LunchCheck",[]).controller("LunchCheckController",n),n.$inject=["$scope"]}();