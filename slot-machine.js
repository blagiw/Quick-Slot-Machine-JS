// Define the symbols that can appear on the slots
var symbols = ["🍇", "🍋", '🍊', '🍇','🍎', '🍉'];

// Define the function that will spin the slots
function spin() {
	// Generate a random symbol for each slot
	const symbol1 = symbols[Math.floor(Math.random() * symbols.length)];
	const symbol2 = symbols[Math.floor(Math.random() * symbols.length)];
	const symbol3 = symbols[Math.floor(Math.random() * symbols.length)];

	// Update the HTML of the slots with the new symbols
	document.getElementById('slot1').innerHTML = symbol1;
	document.getElementById('slot2').innerHTML = symbol2;
	document.getElementById('slot3').innerHTML = symbol3;

	// Check if the player won
	if (symbol1 === symbol2 && symbol2 === symbol3) {
		alert('You won!');
	}
}