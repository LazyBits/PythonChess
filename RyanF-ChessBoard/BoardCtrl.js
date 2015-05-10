function BoardCtrl($scope, $http) {
	
	//Really gross way of iterating through each piece to fin dthe right element.
	$scope.getPiece = function (rowNum, spotNum) {
		var rows = $scope.board.rows;
		for (var rowIndex in rows) {
			var row = rows[rowIndex];
			if (row["rowID"] == rowNum) {
				var spots = row.spots;
				for (var spotIndex in spots) {
					var spot = spots[spotIndex];
					if (spot["spotID"] == spotNum) {
						return getCharacterCode(spot);
					}
				}
				return '\xA0';
			}
		}
		return '\xA0';
	}
	
	$scope.updateBoard = function(rowIndex, colIndex) {
		console.log("Click detected: "+rowIndex+', '+colIndex);
		if ($scope.lastClicked==null) {
			$scope.lastClicked={};
			$scope.lastClicked.row=rowIndex;
			$scope.lastClicked.col=colIndex;
			//show the user they clicked it
			$( "#r"+rowIndex+"c"+colIndex ).css("background-color", "CornflowerBlue");
		}
		else{
			//We will move the last selected piece to the new place and clear the old place and last selected piece.
			console.log("new place "+$scope.board.rows[rowIndex][colIndex]);
		}
	};
	
	$scope.loadBoard = function () {
		//for now build json here so we don't need to serve the page.  In future we will load it form dynamic JSON anyway.  //var board = $http.get("board.json");
		$scope.board = {
			//consider converting from rows[] to objects "row1" "row2" etc will allow direct access for getPiece
			"rows": [
				{
					"rowID": "0",
					"spots": [
						{
							"spotID": "0",
							"type": "rook",
							"color": "black"
						},
						{
							"spotID": "1",
							"type": "knight",
							"color": "black"
						},
						{
							"spotID": "2",
							"type": "bishop",
							"color": "black"
						},
						{
							"spotID": "3",
							"type": "queen",
							"color": "black"
						},
						{
							"spotID": "4",
							"type": "king",
							"color": "black"
						},
						{
							"spotID": "5",
							"type": "bishop",
							"color": "black"
						},
						{
							"spotID": "6",
							"type": "knight",
							"color": "black"
						},
						{
							"spotID": "7",
							"type": "rook",
							"color": "black"
						}
					]
				},
				{
					"rowID": "1",
					"spots": [
						{
							"spotID": "0",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "1",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "2",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "3",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "4",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "5",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "6",
							"type": "pawn",
							"color": "black"
						},
						{
							"spotID": "7",
							"type": "pawn",
							"color": "black"

						}
					]
				},
				//				{	"rowID":"2",
				//					"spots":[
				//						{
				//							"spotID":"0",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"1",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"2",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"3",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"4",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"5",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"6",
				//							"type":"none"
				//						},
				//						{
				//							"spotID":"7",
				//							"type":"none"
				//						}
				//					]
				//				},
				{
					"rowID": "6",
					"spots": [
						{
							"spotID": "0",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "1",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "2",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "3",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "4",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "5",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "6",
							"type": "pawn",
							"color": "white"
						},
						{
							"spotID": "7",
							"type": "pawn",
							"color": "white"
						}
					]
				},
				{
					"rowID": "7",
					"spots": [
						{
							"spotID": "0",
							"type": "rook",
							"color": "white"
						},
						{
							"spotID": "1",
							"type": "knight",
							"color": "white"
						},
						{
							"spotID": "2",
							"type": "bishop",
							"color": "white"
						},
						{
							"spotID": "3",
							"type": "queen",
							"color": "white"
						},
						{
							"spotID": "4",
							"type": "king",
							"color": "white"
						},
						{
							"spotID": "5",
							"type": "bishop",
							"color": "white"
						},
						{
							"spotID": "6",
							"type": "knight",
							"color": "white"
						},
						{
							"spotID": "7",
							"type": "rook",
							"color": "white"
						}
					]
				}
			]
		};
	};
	//Make sure loadBoard runs on load.  probably a bit hacky also
	$scope.loadBoard();

}



//Adding it to my chess app from the bottom, not sure if this is the best way, just hacking for now.
BoardCtrl.$inject = ['$scope', '$http'];
angular.module("chessApp", []).controller('BoardCtrl', BoardCtrl);

