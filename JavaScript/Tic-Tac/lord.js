let title = document.querySelector(".title");
let turn = 'X'; // Tracks the current player's turn
let squares = []; // Stores the state of each square

// Function to check for a winner
function checkWinner() {
    const winningCombinations = [
        [1, 2, 3], // Top row
        [4, 5, 6], // Middle row
        [7, 8, 9], // Bottom row
        [1, 4, 7], // Left column
        [2, 5, 8], // Middle column
        [3, 6, 9], // Right column
        [1, 5, 9], // Diagonal
        [3, 5, 7], // Diagonal
    ];

    // Check each winning combination
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            // Highlight the winning squares
            document.getElementById('item' + a).style.background = '#000';
            document.getElementById('item' + b).style.background = '#000';
            document.getElementById('item' + c).style.background = '#000';

            // Announce the winner
            title.innerHTML = `${squares[a]} wins!`;

            // Reload the page after 2 seconds
            setTimeout(() => location.reload(), 2000);
            return true;
        }
    }

    // Check for a draw
    if (Object.values(squares).filter(Boolean).length === 9) {
        title.innerHTML = "It's a draw!";
        setTimeout(() => location.reload(), 2000);
        return true;
    }

    return false; // No winner yet
}

// Function to handle a square click
function game(id) {
    let element = document.getElementById(id);
    if (element.innerHTML !== '') return; // If the square is already filled, do nothing

    // Update the square with the current player's symbol
    element.innerHTML = turn;
    squares[id.replace('item', '')] = turn; // Update the squares array

    // Check for a winner
    if (checkWinner()) return;

    // Switch turns
    turn = turn === 'X' ? 'O' : 'X';
    title.innerHTML = `${turn}'s turn`;
}