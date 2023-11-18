const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 10;
const snakeColor = 'green';
const foodColor = 'red';

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = gridSize;
let dy = 0;
let changingDirection = false;
let score = 0;

function drawSnakePart(snakePart) {
  ctx.fillStyle = snakeColor;
  ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
}

function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake = [head, ...snake.slice(0, -1)];
}

function checkCollision() {
  // Vaata, kas uss on liikunud väljapoole piire
  if (snake[0].x >= canvas.width) snake[0].x = 0;
  if (snake[0].x < 0) snake[0].x = canvas.width - gridSize;
  if (snake[0].y >= canvas.height) snake[0].y = 0;
  if (snake[0].y < 0) snake[0].y = canvas.height - gridSize;

  /* for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  } */

  return false;
}

function changeDirection(event) {
  if (changingDirection) return;
  changingDirection = true;

  const keyCode = event.keyCode;
  switch (keyCode) {
    case 37:
      if (dx === 0) {
        dx = -gridSize;
        dy = 0;
      }
      break;
    case 38:
      if (dy === 0) {
        dx = 0;
        dy = -gridSize;
      }
     event.preventDefault(); // Peata lehe kerimise käitumine
      break; 
    case 39:
      if (dx === 0) {
        dx = gridSize;
        dy = 0;
      }
      break;
    case 40:
      if (dy === 0) {
        dx = 0;
        dy = gridSize;
      }
      event.preventDefault(); // Peata lehe kerimise käitumine
      break;
  }
}

function getRandomCoordinate() {
  return Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
}

function updateGameArea() {
    if (checkCollision()) {
        clearInterval(gameInterval);
        alert('Game over! Your score: ' + score);
        return;
      }
    
      changingDirection = false;
      const newHeadX = snake[0].x + dx;
      const newHeadY = snake[0].y + dy;
    
      const foodX = Math.floor(food.x / gridSize) * gridSize;
      const foodY = Math.floor(food.y / gridSize) * gridSize;
    
      if (newHeadX === foodX && newHeadY === foodY) {
        score++;
        const newFoodX = getRandomCoordinate();
        const newFoodY = getRandomCoordinate();
        food = { x: newFoodX, y: newFoodY };
        snake.push({}); // Lase ussil kasvada iga toidu söömise järel
        document.getElementById("scoreValue").textContent = score; // Uuenda skoori
      }
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      drawFood();
      snake.forEach(drawSnakePart);
    
      moveSnake();
    }

document.addEventListener('keydown', changeDirection);

const gameInterval = setInterval(updateGameArea, 100);

// br valideerimine

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Peatab vormi esitamise

    // Kontrolli, kas valitud probleem on õige
    var probleemSelect = document.getElementById("probleem");
    if (probleemSelect.value !== "Probleem 1") {
      // Kui valik on vale, muuda piir punaseks
      probleemSelect.style.borderColor = "red";
    } else {
      // Kui valik on õige, eemalda punane piir
      probleemSelect.style.borderColor = "";
    }

    // Sarnased kontrollid teiste valikute jaoks...

    var probleemSelect = document.getElementById("sammud1");
    if (probleemSelect.value !== "Samm 1.1") {
      // Kui valik on vale, muuda piir punaseks
      probleemSelect.style.borderColor = "red";
    } else {
      // Kui valik on õige, eemalda punane piir
      probleemSelect.style.borderColor = "";
    }

    var probleemSelect = document.getElementById("sammud2");
    if (probleemSelect.value !== "Samm 2.2") {
      // Kui valik on vale, muuda piir punaseks
      probleemSelect.style.borderColor = "red";
    } else {
      // Kui valik on õige, eemalda punane piir
      probleemSelect.style.borderColor = "";
    }

    var probleemSelect = document.getElementById("oodatudTulemus");
    if (probleemSelect.value !== "Tulemus 3") {
      // Kui valik on vale, muuda piir punaseks
      probleemSelect.style.borderColor = "red";
    } else {
      // Kui valik on õige, eemalda punane piir
      probleemSelect.style.borderColor = "";
    }

    var probleemSelect = document.getElementById("parisTulemus");
    if (probleemSelect.value !== "Päris tulemus 2") {
      // Kui valik on vale, muuda piir punaseks
      probleemSelect.style.borderColor = "red";
    } else {
      // Kui valik on õige, eemalda punane piir
      probleemSelect.style.borderColor = "";
    }

  });
});