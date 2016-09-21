(function () {
	var app = angular.module('CheckShoppingList', []);
	app.controller("ToBuy", ToBuy);
	app.controller("Bought", Bought);
	ToBuy.$inject = ['$scope', 'check_item'];
	Bought.$inject = ['$scope', 'check_item'];


	app.service("check_item", function(){
		// data
		this.tobuy = [{name: "cookies", quantity: 10}, {name: "oranges", quantity: 5},
			 {name: "apples", quantity: 6}, {name: "eggs", quantity: 12},
			 {name: "chocolates", quantity: 5}, {name: "bananas", quantity: 10}];
		this.bought = [];

		this.func = function(index){
			var to_remove = this.tobuy[index];
			for(var i = index; i < this.tobuy.length - 1; i++) {
				this.tobuy[i] = this.tobuy[i+1];
			}
			this.tobuy.pop();
			this.bought.push(to_remove);
		}
	});

	function ToBuy($scope, check_item){
		$scope.tobuy = check_item.tobuy;
		$scope.check = function (index) {
			check_item.func(index);
		}
	}

	function Bought($scope, check_item){
		$scope.bought = check_item.bought;
	}

})();

// !function(){function t(t,n){t.tobuy=n.tobuy,t.check=function(t){n.func(t)}}function n(t,n){t.bought=n.bought}var o=angular.module("CheckShoppingList",[]);o.controller("ToBuy",t),o.controller("Bought",n),t.$inject=["$scope","check_item"],n.$inject=["$scope","check_item"],o.service("check_item",function(){this.tobuy=[{name:"cookie",quantity:10},{name:"orange",quantity:5},{name:"apple",quantity:6},{name:"egg",quantity:12},{name:"chocolate",quantity:5},{name:"banana",quantity:10}],this.bought=[],this.func=function(t){for(var n=this.tobuy[t],o=t;o<this.tobuy.length-1;o++)this.tobuy[o]=this.tobuy[o+1];this.tobuy.pop(),this.bought.push(n)}})}();