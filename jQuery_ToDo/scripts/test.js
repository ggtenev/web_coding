$('ul').on('click','li', function(e){
	$(this).toggleClass('lisToggle');
	e.stopPropagation();
})

$('ul').on('click','.x',function(e){
	$(this).parent().parent().fadeOut(500, function(){
		$(this).remove();
	});
	
	e.stopPropagation();
})
$('input[type="text"]').keypress(function(e){
	if(e.which == 13) {
		$('ul').prepend('<li><span class = "x"><i class="far fa-trash-alt x"></i></span>'  + $(this).val() + '</li>');
		$(this).val("");
	}
})

let faded = true;

$('#plus').on('click',function(){
	if(faded){
		$('input').fadeOut(500)
		faded = false;
	}
	else if(!faded){
		$('input').fadeIn(500)
		faded = true;
	}
})
