
// konami code
// https://gomakethings.com/how-to-create-a-konami-code-easter-egg-with-vanilla-js/
var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;

    // https://github.com/loonywizard/js-confetti
		const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ['🍉'],
    })
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
