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
      messageElement.innerText = `Mängija ${currentPlayer} kord`;
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

  // Lähtesta praegune mängija 'X'-iks
  currentPlayer = 'X';

  // Lähtesta teade mängijate vahetamiseks
  messageElement.innerText = `${currentPlayer}'s turn`;

  // Võimaldage uuesti klikkida
  boardElement.style.pointerEvents = 'auto';
}

// br valideerimine

const õigedVastused1 = ["Samm 1.2", "Samm 1.3", "Samm 1.4"];
const õigedVastused3 = ["Samm 3.2", "Samm 3.3", "Samm 3.4"];
const õigedVastused5 = ["Samm 5.2", "Samm 5.3", "Samm 5.4"];

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Peatab vormi esitamise


    // Kontrolli, kas valitud probleem on õige
    var probleemSelect = document.getElementById("probleem");
    if (probleemSelect.value !== "Probleem 3") {
      // Kui valik on vale, muuda piir punaseks
      probleemSelect.style.borderColor = "red";
    } else {
      // Kui valik on õige, eemalda punane piir
      probleemSelect.style.borderColor = "";
    }

     // Samm 1
     var sammud1Select = document.getElementById("sammud1");
     if (!õigedVastused1.includes(sammud1Select.value)) {
       sammud1Select.style.borderColor = "red";
     } else {
       sammud1Select.style.borderColor = "";
     }
 
     // Samm 2
     var sammud2Select = document.getElementById("sammud2");
     if (sammud2Select.value !== "Samm 2.1") {
       sammud2Select.style.borderColor = "red";
     } else {
       sammud2Select.style.borderColor = "";
     }
 
     // Samm 3
     var sammud3Select = document.getElementById("sammud3");
     if (!õigedVastused3.includes(sammud3Select.value)) {
       sammud3Select.style.borderColor = "red";
     } else {
       sammud3Select.style.borderColor = "";
     }
 
     // Samm 4
     var sammud4Select = document.getElementById("sammud4");
     if (sammud4Select.value !== "Samm 4.1") {
       sammud4Select.style.borderColor = "red";
     } else {
       sammud4Select.style.borderColor = "";
     }
 
     // Samm 5
     var sammud5Select = document.getElementById("sammud5");
     if (!õigedVastused5.includes(sammud5Select.value)) {
       sammud5Select.style.borderColor = "red";
     } else {
       sammud5Select.style.borderColor = "";
     }
 
     // Oodatud Tulemus
     var oodatudSelect = document.getElementById("oodatudTulemus");
     if (oodatudSelect.value !== "Oodatud tulemus 2") {
       oodatudSelect.style.borderColor = "red";
     } else {
       oodatudSelect.style.borderColor = "";
     }
 
     // Päris Tulemus
     var parisSelect = document.getElementById("parisTulemus");
     if (parisSelect.value !== "Päris tulemus 1") {
       parisSelect.style.borderColor = "red";
     } else {
       parisSelect.style.borderColor = "";
     }
   });
 });