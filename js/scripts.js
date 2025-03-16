// Function to get time remaining until midnight (24-hour daily countdown)
function getTimeUntilMidnight() {
	const now = new Date();
	const midnight = new Date();
	
	// Set the time to the next midnight
	midnight.setHours(24, 0, 0, 0);
	
	// Calculate the time difference
	return midnight - now;
}

// Update the countdown every second
const x = setInterval(function() {
	// Get time until midnight
	const distance = getTimeUntilMidnight();
	
	// Time calculations for hours, minutes and seconds
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	// Display the result
	document.getElementById('timer').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Collection of time-related quotes
const quotes = [
	'"The two most powerful warriors are patience and time." – Leo Tolstoy, War and Peace.',
	'"Time is money." – Benjamin Franklin.',
	'"Better three hours too soon than a minute too late." – William Shakespeare.',
	'"Lost time is never found again." – Benjamin Franklin.',
	'"Time is the most valuable thing a man can spend." – Theophrastus.',
	'"Time is the wisest counselor of all." – Pericles.',
	'"The key is in not spending time, but in investing it." – Stephen R. Covey.',
	'"It is the time you have wasted for your rose that makes your rose so important." – Antoine de Saint-Exupéry, The Little Prince.',
	'"Punctuality is the thief of time." – Oscar Wilde, The Picture of Dorian Gray.',
	'"The trouble is, you think you have time." – Jack Kornfield.',
	'"Time is a cruel thief to rob us of our former selves. We lose as much to life as we do to death." - Elizabeth Forsythe Hailey.',
	'"Men talk of killing time, while time quietly kills them." - Dion Boucicault.',
	'"There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time." - Napoleon I.',
	'"You can\'t have a better tomorrow if you are thinking about yesterday all the time." - Charles F. Kettering.',
	'"It\'s not that we have little time, but more that we waste a good deal of it." - Seneca.',
	'"Time stops for no one, and death won\'t wait" - Xavier Marcus Duncan.'
];

// Display a random quote
function displayRandomQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	const quoteElement = document.getElementById('quote');
	
	// Fade out
	quoteElement.style.opacity = 0;
	
	// Change content and fade in after a short delay
	setTimeout(() => {
		quoteElement.innerHTML = quotes[randomNumber];
		quoteElement.style.opacity = 1;
	}, 500);
}

// Initialize the first quote
displayRandomQuote();

// Change quote automatically every 15 seconds
setInterval(displayRandomQuote, 15000);