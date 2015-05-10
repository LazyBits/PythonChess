var classHighlight = 'highlight'; 
var classSelected = 'selected';

var blackPieces= ["bR", "bK", "bB", "bQ", "bK", "bP"];
var whitePieces = ["wR", "wK", "wB", "wQ", "wK", "wP"];

var moveComplete;

$('.chess-field').click(function() {
	moveComplete = false;
	if($('.chess-field').children('.chess-piece.selected').length == 1)
	{
		movePiece($(this));
	}
	correctFocus($(this));	
});

var movePiece = function(chessField) {
	var attackerName = $('.chess-piece.selected').html();
	var defenderName = chessField.children('.chess-piece').html();	
	if(attackerName)
	{
		var attackerColor = attackerName.charAt(0);
		var defenderColor;
		if(defenderName)
		{
			var defenderColor = defenderName.charAt(0);		
		}
		if(determineEnemy(attackerColor, defenderColor))
		{			
			chessField.children('.chess-piece').html(attackerName);
			$('.chess-piece.selected').html("");
		}
	}
	moveComplete = true;
}

var determineEnemy = function(attacker, defender) {
	var result;
	if(attacker != defender) 
		result = true
	else 
		result = false
	return result
}

var correctFocus = function(chessField) {	
	$('.chess-field').removeClass(classHighlight);	
	$('.chess-piece').removeClass(classSelected)
	if(chessField.children('.chess-piece').html() != "" && moveComplete == false)
	{
		chessField.addClass(classHighlight);
		chessField.children('.chess-piece').addClass(classSelected)
	}		
}
