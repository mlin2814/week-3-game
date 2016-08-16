<script type="text/javascript">
	var alphabet = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
	var hello = alert(Would you like to play?);
	var wins = 0;
	var wordBank = ["Steven", "Rose", "Greg", "Pearl", "Garnet", "Amethyst", "Sapphire", "Ruby", "Peridot", "Lapis", "Jasper", "Sadie", "Lars", "Onion"];
	var lines = [_______________];
	var chances = 10;

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

if (userGuess == computerGuess) {
	continue++;
}else if (userGuess != computerGuess) {
	losses;
}

if (lines == wordBank) {
	continue++;
}

guessButton = document.getElementById("guess");
        guessInput.style.display = 'inline';
        guessButton.style.display = 'inline';





</script>
