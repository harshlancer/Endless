<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Game</title>
    <style>
        #game-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 auto;
            touch-action: none;
        }
        #game-canvas {
            width: 100%;
            height: 100%;
            background-color: #eee;
        }
        #joystick {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 100px;
            height: 100px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
        }
        #joystick-handle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <canvas id="game-canvas"></canvas>
        <div id="joystick">
            <div id="joystick-handle"></div>
        </div>
    </div>
    <script>
        // JavaScript code for the game goes here
    </script>
</body>
</html>