// let $cut = $('#cut');
// let $copy = $('#copy');
// let $paste = $('#paste');

// $copy.on('click', function() {
// 	let $text = $('.text');
// 	let $copiedText = $text.clone();
// 	// $copiedText.insertAfter('h3');
// 	console.log($copiedText[0]);
// 	// $text.remove()
// 	$paste.on('click', function() {
// 		$('textarea').append(`${$copiedText[0].innerText}\n\n`);
// 	})
// });

// $cut.on('click', function() {
// 	let $text = $('.text');
// 	let $copiedText = $text.clone();
// 	// $copiedText.insertAfter('h3');
// 	console.log($copiedText[0]);
// 	$text.remove()
// 	$paste.on('click', function() {
// 		$('textarea').append(`${$copiedText[0].innerText}\n\n`);
// 	})
// });

let cut = document.querySelector('#cut'),
	copy = document.querySelector('#copy'),
	paste = document.querySelector('#paste');

cut.addEventListener('click', () => {
	let text = document.querySelector('.text');
	let copiedText = text.cloneNode(true);
	console.log(copiedText);
	text.parentNode.removeChild(text);
	paste.addEventListener('click', () => {
		document.querySelector('textarea').append(`${copiedText.textContent}\n\n`)
	});
});

copy.addEventListener('click', () => {
	let text = document.querySelector('.text');
	let copiedText = text.cloneNode(true);
	console.log(copiedText);

	paste.addEventListener('click', () => {
		document.querySelector('textarea').append(`${copiedText.textContent}\n\n`)
	});
});

