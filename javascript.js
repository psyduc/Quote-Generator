var quotes = ['You require additional pylons. -Starcraft',
 	'Welcome to the Summoner\'s Rift. -League of Legends',
 	'Stay awhile and listen. -Deckard Cain',
 	'Cheers love, the calvary\'s here! -Tracer'];

function newQuote() {
	var randomNumber = Math.floor( Math.random() * (quotes.length) );
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}