let currentPlayer = 'X';
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const gameContainer = document.querySelector('.game-container');
const boardElement = document.getElementById('board');
const messageElement = document.getElementById('player-turn');

function makeMove(row, col) {
  if (board[row][col] === '' && !checkWinner()) {
    board[row][col] = currentPlayer;
    const cell = boardElement.children[row * 3 + col];
    cell.innerText = currentPlayer;

    if (checkWinner()) {
      messageElement.innerText = `${currentPlayer} wins!`;
      boardElement.style.pointerEvents = 'none'; // Keela edasised klikid
    } else if (board.flat().every(cell => cell !== '')) {
      messageElement.innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      messageElement.innerText = `${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],  // Diagonal from top-left to bottom-right
    // Excluding the diagonal from top-right to bottom-left
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a[0]][a[1]] !== '' && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      return true;
    }
  }

  return false;
}


function refreshGame() {
  // Tühjendage mängulaud
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      board[row][col] = '';
      const cell = boardElement.children[row * 3 + col];
      cell.innerText = '';
    }
  }

  // Lähtesta teade mängijate vahetamiseks
  messageElement.innerText = `${currentPlayer}'s turn`;

  // Võimaldage uuesti klikkida
  boardElement.style.pointerEvents = 'auto';
}