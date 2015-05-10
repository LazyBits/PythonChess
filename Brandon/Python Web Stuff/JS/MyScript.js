console.log($('.chess-row'));

$('.chess-row').each(function() {
	console.log(this);
})

var classHighlight = 'highlight'; 

var pieceNames = ["wR", "wK", "wB", "wQ", "wK", "wP", "bR", "bK", "bB", "bQ", "bK", "bP"]
$('.chess-field').click(function() {
	
		$(this).removeClass(classHighlight);	
		if($(this).children('.chess-piece').html())
		{
			$(this).addClass(classHighlight);
		}	
	if($(classHighlight))
	{
		console.log($(classHighlight))
	}
	else{
	}
});