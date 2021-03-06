/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>

function BoardCtrl($scope, $http) {
	
	//Really gross way of iterating through each piece to fin dthe right element.
	$scope.getPiece = function (rowNum, colNum) {
		var row = $scope.board["row"+rowNum];
		if (typeof row === 'undefined') { //TODO maybe i shuold check for null here?
			return '\xA0'; //--return JS version of &nbsp
		}
		else{
			var col = row["col"+colNum];
			if (typeof col === 'undefined') { //TODO maybe i shuold check for null here?
				return '\xA0'; //--return JS version of &nbsp
			}
			else {
				return getCharacterCode(col);
			}
		}
	};
	
	$scope.updateBoard = function(rowIndex, colIndex) {
		console.log("Click detected: "+rowIndex+', '+colIndex);
		if ($scope.lastClicked==null) { //TODO maybe I shoudl check for undefined here
			$scope.lastClicked={};
			$scope.lastClicked.row=rowIndex;
			$scope.lastClicked.col=colIndex;
			//show the user they clicked it
			$( "#r"+rowIndex+"c"+colIndex ).addClass("selected");
		}
		//Check we didn't just click the same piece again
		else if($scope.lastClicked.row==rowIndex && $scope.lastClicked.col==colIndex){
			//Reset the appearance of the board
			$( "#r"+$scope.lastClicked.row+"c"+$scope.lastClicked.col ).removeClass("selected");
			//nullify lastClicked
			$scope.lastClicked = null;
		}
		else{
			//We will move the last selected piece to the new place and clear the old place and last selected piece.
			//first move the piece to the new location
			var piece = $scope.board["row"+$scope.lastClicked.row]["col"+$scope.lastClicked.col];
			//check for null in new location
			if (typeof $scope.board["row"+rowIndex]==='undefined'){
				$scope.board["row"+rowIndex] = {};
			}
			if (typeof $scope.board["row"+rowIndex]["col"+colIndex] === 'undefined'){
				$scope.board["row"+rowIndex]["col"+colIndex] = {};
			}
			$scope.board["row"+rowIndex]["col"+colIndex].type = piece.type;
			$scope.board["row"+rowIndex]["col"+colIndex].color = piece.color;
			//Now remove the piece form the old location
			delete $scope.board["row"+$scope.lastClicked.row]["col"+$scope.lastClicked.col];
			//Reset the appearance of the board
			$( "#r"+$scope.lastClicked.row+"c"+$scope.lastClicked.col ).removeClass("selected");
			//nullify lastClicked
			$scope.lastClicked = null;

		}
	};
	
	$scope.getTileShading = function(rowIndex, colIndex) {
		if ((rowIndex+colIndex)%2==1){
			$("#r"+rowIndex+"c"+colIndex).addClass("tile-dark");
		}
		else{
			$("#r"+rowIndex+"c"+colIndex).addClass("tile-light");
		}
	};
	
	$scope.loadBoard = function () {
		//for now build json here so we don't need to serve the page.  In future we will load it form dynamic JSON anyway.  //var board = $http.get("board.json");
		$scope.board = {
			//consider converting from rows[] to objects "row1" "row2" etc will allow direct access for getPiece
			"row0": {
				"col0": {
					"type": "rook",
					"color": "black"
				},
				"col1": {
					"type": "knight",
					"color": "black"
				},
				"col2": {
					"type": "bishop",
					"color": "black"
				},
				"col3": {
					"type": "queen",
					"color": "black"
				},
				"col4": {
					"type": "king",
					"color": "black"
				},
				"col5": {
					"type": "bishop",
					"color": "black"
				},
				"col6": {
					"type": "knight",
					"color": "black"
				},
				"col7": {
					"type": "rook",
					"color": "black"
				}
			},
			"row1": {
				"col0": {
					"type": "pawn",
					"color": "black"
				},
				"col1": {
					"type": "pawn",
					"color": "black"
				},
				"col2": {
					"type": "pawn",
					"color": "black"
				},
				"col3": {
					"type": "pawn",
					"color": "black"
				},
				"col4": {
					"type": "pawn",
					"color": "black"
				},
				"col5": {
					"type": "pawn",
					"color": "black"
				},
				"col6": {
					"type": "pawn",
					"color": "black"
				},
				"col7": {
					"type": "pawn",
					"color": "black"
				}
			},
			"row6": {
				"col0": {
					"type": "pawn",
					"color": "white"
				},
				"col1": {
					"type": "pawn",
					"color": "white"
				},
				"col2": {
					"type": "pawn",
					"color": "white"
				},
				"col3": {
					"type": "pawn",
					"color": "white"
				},
				"col4": {
					"type": "pawn",
					"color": "white"
				},
				"col5": {
					"type": "pawn",
					"color": "white"
				},
				"col6": {
					"type": "pawn",
					"color": "white"
				},
				"col7": {
					"type": "pawn",
					"color": "white"
				}
			},
			"row7": {
				"col0": {
					"type": "rook",
					"color": "white"
				},
				"col1": {
					"type": "knight",
					"color": "white"
				},
				"col2": {
					"type": "bishop",
					"color": "white"
				},
				"col3": {
					"type": "queen",
					"color": "white"
				},
				"col4": {
					"type": "king",
					"color": "white"
				},
				"col5": {
					"type": "bishop",
					"color": "white"
				},
				"col6": {
					"type": "knight",
					"color": "white"
				},
				"col7": {
					"type": "rook",
					"color": "white"
				}
			}
		};
	};
	//Make sure loadBoard runs on load.  probably a bit hacky also
	$scope.loadBoard();

}



//Adding it to my chess app from the bottom, not sure if this is the best way, just hacking for now.
BoardCtrl.$inject = ['$scope', '$http'];
angular.module("chessApp", []).controller('BoardCtrl', BoardCtrl);

