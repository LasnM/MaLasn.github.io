const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
canvas.height = 400;
    
    const paddleWidth = 12;  // Fixed width for the paddle
        const paddleHeight = 80; // Fixed height for the paddle
        const ballSize = 12;

    
    let paddle1Y = (canvas.height - paddleHeight) / 2;
    let paddle2Y = (canvas.height - paddleHeight) / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 5;
    let ballSpeedY = 5;
    
    let player1Score = 0;
    let player2Score = 0;

    let gameStarted = false;
    let animationFrameId;
    
    function drawRect(x, y, width, height, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
    
    function drawCircle(x, y, radius, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    }
    
    function drawNet() {
      for (let i = 0; i < canvas.height; i += 40) {
        drawRect(canvas.width / 2 - 1, i, 2, 20, 'white');
      }
    }
    
    function drawText(x, y, text, color, size) {
      ctx.fillStyle = color;
      ctx.font = `${size}px Arial`;
      ctx.fillText(text, x, y);
    }
    
    function resetBall() {
      ballX = canvas.width / 2;
      ballY = canvas.height / 2;
      ballSpeedX = -ballSpeedX;
    }
    
    function moveEverything() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;
    
      if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
          ballSpeedX = -ballSpeedX;
        } else {
          player2Score++; // Player 2 scores a point
          resetBall();
        }
      }
      if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
          ballSpeedX = -ballSpeedX;
        } else {
          player1Score++; // Player 1 scores a point
          resetBall();
        }
      }
    
      if (ballY < 0 || ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
      }

      if (player1Score == 5 || player2Score == 5){
        ballSpeedX = 0;
        ballSpeedY = 0;
      }
    }
    
    function computerMovement() {
      const paddle2YCenter = paddle2Y + paddleHeight / 2;
      const delayFactor = 0.4; // Try increasing the delay factor

      if (paddle2YCenter < ballY - 35) {
        paddle2Y += 6 * delayFactor;
      } else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= 6 * delayFactor;
      }
    }
    
    function drawEverything() {
      // Clear the canvas
      drawRect(0, 0, canvas.width, canvas.height, 'white');
    
      // Draw the net
      drawNet();
    
      // Draw paddles and ball
      drawRect(0, paddle1Y, paddleWidth, paddleHeight, 'red');
      drawRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight, 'black');
      drawCircle(ballX, ballY, ballSize, 'black');
    
      // Display scores
      drawText(100, 100, player1Score, 'black', 40);
      drawText(canvas.width - 100, 100, player2Score, 'black', 40);
    }
    
    function update() {
      moveEverything();
      computerMovement();
      drawEverything();
    }
    
    function runGame() {
      update();
      requestAnimationFrame(runGame);
    }
  
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
  
      // Ensure the paddle moves with the center aligned to the mouse position.
      paddle1Y = mouseY - paddleHeight / 2;
  
      // Clamp the paddle's position within the canvas boundaries.
      if (paddle1Y < 0) {
          paddle1Y = 0;
      } else if (paddle1Y + paddleHeight > canvas.height) {
          paddle1Y = canvas.height - paddleHeight;
      }
  });
  
  
  

    
    
    function startGame() {
      // Reset game state
  player1Score = 0;
  player2Score = 0;
  paddle1Y = (canvas.height - paddleHeight) / 2;
  paddle2Y = (canvas.height - paddleHeight) / 2;
  resetBall();
  ballSpeedX = 5;
  ballSpeedY = 5;

  // Check if the game has already started
  if (!gameStarted) {
    gameStarted = true;
    animationFrameId = requestAnimationFrame(runGame);
  } else {
    // If the game has ended and the button is pressed, reset the state without starting the game loop again
    drawEverything();
  }
    }

    
