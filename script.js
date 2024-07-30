// Select all cells and the reset button
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');

// Initialize variables for the current player, board state, and game over status
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

// Define winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add click event listeners to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Add click event listener to the reset button
resetButton.addEventListener('click', resetGame);

// Function to handle cell click events
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    // If the cell is already filled or the game is over, do nothing
    if (board[index] !== '' || isGameOver) {
        return;
    }

    // Update the board state and the cell's text content
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWin(currentPlayer)) {
        alert('Le joueur des ' + currentPlayer + ' a gagné!');
        isGameOver = true;
        return;
    }

    // Check if the game is a draw
    if (board.every(cell => cell !== '')) {
        alert('Match nul!');
        isGameOver = true;
        return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check if a player has won
function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

// Function to reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameOver = false;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
