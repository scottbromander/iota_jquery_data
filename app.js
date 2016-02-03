var counter = 0;

$(document).ready(function(){
	$('#meowCats').append('<button class="cat-button">Meow</button>');

	$('.cat-button').on('click', appendDom);
	$('#meowCats').on('click', '.clicky',showCount);
});

function appendDom(){
	counter++;
	$('#meowCats').append('<div>Meow</div>');

	var $el = $('#meowCats').children().last();
	$el.data("catvalue", counter);

	$el.append('<button class="clicky">Show Count</button>')
}

function showCount(){
	console.log($(this).parent().data('catvalue'));
}