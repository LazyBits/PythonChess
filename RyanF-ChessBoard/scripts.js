/// <reference path="../typings/jquery/jquery.d.ts"/>
var characterCodes = 
{
	"white":
	{
		"king":"\u2654",
		"queen":"\u2655",
		"rook":"\u2656",
		"bishop":"\u2657",
		"knight":"\u2658",
		"pawn":"\u2659"
	},
	"black":
	{
		"king":"\u265a",
		"queen":"\u265b",
		"rook":"\u265c",
		"bishop":"\u265d",
		"knight":"\u265e",
		"pawn":"\u265f"
	}
}

function getCharacterCode(spot){
	return characterCodes[spot.color][spot.type];
}

function buildBoard(){
	$("chessBoardTable")
		.append($('<tr>')
			.append($('</tr>')));
}
buildBoard();