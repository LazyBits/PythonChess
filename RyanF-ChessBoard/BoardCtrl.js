function BoardCtrl($scope, $http){
	$scope.initBoard = function () {
		//We may need to keep this since JSON isn't neccessarily ordered.
		//Unless we sent all cordinated and iterate in order....
		$scope.board = 
		[
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8)//8th row, 7th element
		];
	};
	
	$scope.loadBoard = function () {
		//for now build json here so we don't need to serve the page.  In future we will load it form dynamic JSON anyway.  //var board = $http.get("board.json");
		var board = {
			"rows":[
				{
					"rowID":"0",
					"spots":[
						{
							"spotID":"0",
							"type":"rook",
							"color": "black"
						},
						{
							"spotID":"1",
							"type":"knight",
							"color": "black"
						},
						{
							"spotID":"2",
							"type":"bishop",
							"color": "black"
						},
						{
							"spotID":"3",
							"type":"queen",
							"color": "black"
						},
						{
							"spotID":"4",
							"type":"king",
							"color": "black"
						},
						{
							"spotID":"5",
							"type":"bishop",
							"color": "black"
						},
						{
							"spotID":"6",
							"type":"knight",
							"color": "black"
						},
						{
							"spotID":"7",
							"type":"rook",
							"color": "black"
						}
					]
				},
				{
					"rowID":"1",
					"spots":[
						{
							"spotID":"0",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"1",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"2",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"3",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"4",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"5",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"6",
							"type":"pawn",
							"color": "black"
						},
						{
							"spotID":"7",
							"type":"pawn",
							"color": "black"
						}
					]
				}
			]
		};
		return board;
	};
	
	
}

//Adding it to my chess app from the bottom, not sure if this is the best way, just hacking for now.
BoardCtrl.$inject = ['$scope', '$http'];
angular.module("chessApp", []).controller('BoardCtrl', BoardCtrl)