var classHighlight = 'highlight'; 
var classEnPassant = 'en-passant'; 
var classSelected = 'selected';

var attackerField;
var defenderField;

var blackPieces= ["bR", "bK", "bB", "bQ", "bK", "bP"];
var whitePieces = ["wR", "wK", "wB", "wQ", "wK", "wP"];

var moveComplete;
var enPassant;

$('.chess-field').click(function() {
	moveComplete = false;
	console.log($(this));
	if($('.chess-field').children('.en-passant').html())
	{
		console.log("Boom");
		enPassant = true;
	}
	else 
	{
		enPassant = false;
	}
	if($('.chess-piece.selected').length == 1)
	{
		attackerField = $('.chess-piece.selected').parent('.chess-field');
		defenderField = $(this);
		movePiece(attackerField, defenderField);
	}
	correctFocus($(this));	
});

var movePiece = function(attackerField, defenderField) {
	var attackerName = $('.chess-piece.selected').html();
	var defenderName;	
	if(defenderField.children('.chess-piece')) defenderName = defenderField.children('.chess-piece').html();
	if(attackerName)
	{
		var attackerColor = attackerName.charAt(0);
		var defenderColor;
		if(defenderName) defenderColor = defenderName.charAt(0);		
		if(determineEnemy(attackerColor, defenderColor))
		{	
			var validMove = cycleMoves(attackerField, defenderField, attackerName, defenderName);
			if(validMove)
			{
				console.log(writeDelta(attackerField, defenderField, attackerName, defenderName));
				defenderField.children('.chess-piece').html(attackerName);
				attackerField.children('.chess-piece.selected').html("");				
			}
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

var pawnMapping = function(attackerPiece, defenderPiece, attackerName, defenderName) {	
	var startingPosition = attackerPiece.children('.space-identifier').html();
	var endingPosition = defenderPiece.children('.space-identifier').html();
	var result = false;
	var direction = -1;
	if(attackerName.charAt(0) == 'w') direction = 1;	
	if(defenderName)
	{		
		var Attack1 = String.fromCharCode(startingPosition.charCodeAt(0)+1) + (parseInt(startingPosition.charAt(1))+direction);
		var Attack2 = String.fromCharCode(startingPosition.charCodeAt(0)-1) + (parseInt(startingPosition.charAt(1))+direction);
		if(Attack1 == endingPosition || Attack2 == endingPosition)
		{
			result = true
		}
	}
	else 
	{
		if((startingPosition.charAt(1) == '2' && direction == 1) || (startingPosition.charAt(1) == '7' && direction == -1))
		{
			var startDirection = direction*2;
			if(endingPosition.charAt(0) == startingPosition.charAt(0) && (parseInt(startingPosition.charAt(1)) + direction == parseInt(endingPosition.charAt(1)) || parseInt(startingPosition.charAt(1)) + startDirection == parseInt(endingPosition.charAt(1))))
			{
				if(parseInt(startingPosition.charAt(1)) + startDirection == parseInt(endingPosition.charAt(1)))
				{
					$('.chess-field').removeClass(classEnPassant);	
					defenderPiece.addClass(classEnPassant);		
					enPassant = true;
					console.log("adding");
					console.log(defenderPiece.children());
				}
				result = true;
			}
		}
		else
		{
			if(endingPosition.charAt(0) == startingPosition.charAt(0) && (parseInt(startingPosition.charAt(1)) + direction == parseInt(endingPosition.charAt(1))))
			{
				result = true;
			}
			else if(enPassant)
			{
				var Attack1 = String.fromCharCode(startingPosition.charCodeAt(0)+1) + (parseInt(startingPosition.charAt(1))+direction);
				var Attack2 = String.fromCharCode(startingPosition.charCodeAt(0)-1) + (parseInt(startingPosition.charAt(1))+direction);								
			}
		}
	}
	return result;
}

var cycleMoves = function(attackerPiece, defenderPiece, attackerName, defenderName) {	
	var result = false;
	if(attackerName.charAt(1) == 'P')
	{	
		result = pawnMapping(attackerField, defenderField, attackerName, defenderName);
	}
	if(enPassant == false)
	{
		$('.chess-field').removeClass(classEnPassant);		
	}
	return result;
}

var writeDelta = function(attackerPiece, defenderPiece, attackerName, defenderName) {	
	var delta;
	var detailedDelta;
	if(defenderName)
	{
		delta = attackerName.charAt(1) + "x" + defenderPiece.children('.space-identifier').html();		
	}
	else
	{
		delta = attackerName.charAt(1) + defenderPiece.children('.space-identifier').html();
	}	
	detailedDelta = attackerName + attackerPiece.children('.space-identifier').html() + "->" + defenderName + defenderPiece.children('.space-identifier').html();
	return "["+delta+" ; "+detailedDelta+"]";
}
