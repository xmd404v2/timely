const quotes = [
	'"The two most powerful warriors are patience and time." – Leo Tolstoy, War and Peace.',
	'"Time is money." – Benjamin Franklin.',
	'"Time waits for no one." – Folklore.',
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
  '"You can’t have a better tomorrow if you are thinking about yesterday all the time." - Charles F. Kettering.',
	'"It’s not that we have little time, but more that we waste a good deal of it." - Seneca.', ];
	
(function randomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('quote').innerHTML = quotes[randomNumber];
})();

const countDownDate = new Date('Dec 6, 2099 00:00:00').getTime();

const x = setInterval(function() {
	// Get todays date and time
	const now = new Date().getTime();
	// Find the distance between now an the count down date
	const distance = countDownDate - now;
	// Time calculations for days, hours, minutes and seconds
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById('timer').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('timer').innerHTML = 'EXPIRED';
	}
	// Update the count down every 1 second
}, 1000);