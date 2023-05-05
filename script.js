// Game variables
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var player = { x: 50, y: 150, width: 10, height: 10 };
var obstacles = [];
var gamePause = "false";
var score = 0;
var gameOver = false;

// Event listener for player movement
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp" && player.y > 0) {
    player.y -= 10;
  }
  if (event.code === "ArrowDown" && player.y < canvas.height - player.height) {
    player.y += 10;
  }
  if (event.code === "ArrowLeft" && player.x > 0) {
    player.x -= 10;
  }
  if (event.code === "ArrowRight" && player.x < canvas.width - player.width) {
    player.x += 10;
  }
  if (event.code === "Space") {
    gamePause == !gamePause;
  }
});

// Main game loop
function gameLoop() {
  if (!gameOver) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw obstacles
    for (var i = 0; i < obstacles.length; i++) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(
        obstacles[i].x,
        obstacles[i].y,
        obstacles[i].width,
        obstacles[i].height
      );

      // Check for collision with player
      if (
        obstacles[i].x < player.x + player.width &&
        obstacles[i].x + obstacles[i].width > player.x &&
        obstacles[i].y < player.y + player.height &&
        obstacles[i].y + obstacles[i].height > player.y
      ) {
        gameOver = true;
      }

      // Move obstacles
      obstacles[i].x -= 5;

      // Remove obstacles that are off-screen
      if (obstacles[i].x + obstacles[i].width < 0) {
        obstacles.splice(i, 1);
        i--;
      }
    }

    // Spawn new obstacles
    if (Math.random() < 0.1) {
      obstacles.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 50),
        width: 50,
        height: 50,
      });
    }

    // Update score
    score++;

    // Request next frame
    requestAnimationFrame(gameLoop);
  } else {
    // Game over screen
    ctx.font = "50px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Game Over", canvas.width / 2 - 125, canvas.height / 2);
  }
}

// Start game loop
gameLoop();
