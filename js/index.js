let playbutton = document.getElementById("playbutton");
let choosemodes = document.getElementById("choosemodes");
choosemodes.style.display = "none";
let board = document.getElementById("board");
board.style.backgroundColor = "rgb(16, 15, 16)";

playbutton.addEventListener('click', e => {
    choosemodes.style.display = "flex"
    let play = document.getElementById("play");
    play.style.display = "none";
    board.style.background = "linear-gradient(rgb(170, 236, 170), rgb(236, 236, 167))";

    let easy = document.getElementById("easy");
    let medium = document.getElementById("medium");
    let hard = document.getElementById("hard");
    easy.addEventListener('click', e => {

        // Game Constants & Variables
        let inputDir = { x: 0, y: 0 };
        const foodSound = new Audio('music/food.mp3');
        const gameOverSound = new Audio('music/gameover.mp3');
        const moveSound = new Audio('music/move.mp3');
        const musicSound = new Audio('music/music.mp3');
        let speed = 6;
        let score = 0;

        let lastPaintTime = 0;
        let snakeArr = [
            { x: 13, y: 5 }
        ];
        //let choosemodes = document.getElementById("choosemodes");
        choosemodes.style.display = "none";


        food = { x: 6, y: 7 };
        alert("Press any key to start the game!");
        // Game Functions
        function main(ctime) {
            window.requestAnimationFrame(main);
            // console.log(ctime)
            if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
                return;
            }
            lastPaintTime = ctime;
            gameEngine();
        }

        function isCollide(snake) {
            // If you bump into yourself 
            for (let i = 1; i < snakeArr.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    return true;
                }
            }
            // If you bump into the wall
            if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
                return true;
            }

            return false;
        }

        function gameEngine() {
            // Part 1: Updating the snake array & Food
            if (isCollide(snakeArr)) {
                gameOverSound.play();
                // musicSound.pause();
                inputDir = { x: 0, y: 0 };
                alert("Game Over. Press any key to play again!");
                snakeArr = [{ x: 13, y: 5 }];
                // musicSound.play();
                score = 0;
                scoreBox.innerHTML = "Score: " + score;
            }

            // If you have eaten the food, increment the score and regenerate the food
            if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
                foodSound.play();
                score += 1;
                if (score > hiscoreval1) {
                    hiscoreval1 = score;
                    localStorage.setItem("hiscore1", JSON.stringify(hiscoreval1));
                    hiscoreBox1.innerHTML = `High Score <i class="fa fa-trophy"></i> :` + hiscoreval1;
                }
                scoreBox.innerHTML = "Score: " + score;
                snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
                let a = 2;
                let b = 16;
                food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
            }

            // Moving the snake
            for (let i = snakeArr.length - 2; i >= 0; i--) {
                snakeArr[i + 1] = { ...snakeArr[i] };
            }

            snakeArr[0].x += inputDir.x;
            snakeArr[0].y += inputDir.y;

            // Part 2: Display the snake and Food
            // Display the snake
            board.innerHTML = "";
            snakeArr.forEach((e, index) => {
                snakeElement = document.createElement('div');
                snakeElement.style.gridRowStart = e.y;
                snakeElement.style.gridColumnStart = e.x;

                if (index === 0) {
                    snakeElement.classList.add('head');
                }
                else {
                    snakeElement.classList.add('snake');
                }
                board.appendChild(snakeElement);
            });
            // Display the food
            foodElement = document.createElement('div');
            foodElement.style.gridRowStart = food.y;
            foodElement.style.gridColumnStart = food.x;
            foodElement.classList.add('food')
            board.appendChild(foodElement);


        }


        // Main logic starts here
        //musicSound.play();
        let hiscore1 = localStorage.getItem("hiscore1");
        if (hiscore1 === null) {
            hiscoreval1 = 0;
            localStorage.setItem("hiscore1", JSON.stringify(hiscoreval1))
        }
        else {
            hiscoreval1 = JSON.parse(hiscore1);
            hiscoreBox1.innerHTML = `High Score <i class="fa fa-trophy"></i> :` + hiscore1;
        }

        window.requestAnimationFrame(main);
        window.addEventListener('keydown', e => {
            inputDir = { x: 0, y: 1 } // Start the game
            moveSound.play();
            switch (e.key) {
                case "ArrowUp":
                    // console.log("ArrowUp");
                    inputDir.x = 0;
                    inputDir.y = -1;
                    break;

                case "ArrowDown":
                    // console.log("ArrowDown");
                    inputDir.x = 0;
                    inputDir.y = 1;
                    break;

                case "ArrowLeft":
                    // console.log("ArrowLeft");
                    inputDir.x = -1;
                    inputDir.y = 0;
                    break;

                case "ArrowRight":
                    console.log("ArrowRight");
                    inputDir.x = 1;
                    inputDir.y = 0;
                    break;
                default:
                    break;
            }

        });
        let hiscoreBox2 = document.getElementById("hiscoreBox2");
        hiscoreBox2.style.display = "none";
        let hiscoreBox3 = document.getElementById("hiscoreBox3");
        hiscoreBox3.style.display = "none";

    });

    medium.addEventListener('click', e => {

        // Game Constants & Variables
        let inputDir = { x: 0, y: 0 };
        const foodSound = new Audio('music/food.mp3');
        const gameOverSound = new Audio('music/gameover.mp3');
        const moveSound = new Audio('music/move.mp3');
        const musicSound = new Audio('music/music.mp3');
        let speed = 11;
        let score = 0;

        let lastPaintTime = 0;
        let snakeArr = [
            { x: 13, y: 5 }
        ];
        //let choosemodes = document.getElementById("choosemodes");
        choosemodes.style.display = "none";


        food = { x: 6, y: 7 };
        alert("Press any key to start the game!");
        // Game Functions
        function main(ctime) {
            window.requestAnimationFrame(main);
            // console.log(ctime)
            if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
                return;
            }
            lastPaintTime = ctime;
            gameEngine();
        }

        function isCollide(snake) {
            // If you bump into yourself 
            for (let i = 1; i < snakeArr.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    return true;
                }
            }
            // If you bump into the wall
            if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
                return true;
            }

            return false;
        }

        function gameEngine() {
            // Part 1: Updating the snake array & Food
            if (isCollide(snakeArr)) {
                gameOverSound.play();
                // musicSound.pause();
                inputDir = { x: 0, y: 0 };
                alert("Game Over. Press any key to play again!");
                snakeArr = [{ x: 13, y: 15 }];
                // musicSound.play();
                score = 0;
                scoreBox.innerHTML = "Score: " + score;
            }

            // If you have eaten the food, increment the score and regenerate the food
            if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
                foodSound.play();
                score += 1;
                if (score > hiscoreval2) {
                    hiscoreval2 = score;
                    localStorage.setItem("hiscore2", JSON.stringify(hiscoreval2));
                    hiscoreBox2.innerHTML = `High Score <i class="fa fa-trophy"></i> :` + hiscoreval2;
                }
                scoreBox.innerHTML = "Score: " + score;
                snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
                let a = 2;
                let b = 16;
                food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
                for (let index = 0; index < snakeArr.length; index++) {
                    if (food.x === snakeArr[index].x && food.y === snakeArr[index].y) {
                        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
                    }

                }
            }

            // Moving the snake
            for (let i = snakeArr.length - 2; i >= 0; i--) {
                snakeArr[i + 1] = { ...snakeArr[i] };
            }

            snakeArr[0].x += inputDir.x;
            snakeArr[0].y += inputDir.y;

            // Part 2: Display the snake and Food
            // Display the snake
            board.innerHTML = "";
            snakeArr.forEach((e, index) => {
                snakeElement = document.createElement('div');
                snakeElement.style.gridRowStart = e.y;
                snakeElement.style.gridColumnStart = e.x;

                if (index === 0) {
                    snakeElement.classList.add('head');
                }
                else {
                    snakeElement.classList.add('snake');
                }
                board.appendChild(snakeElement);
            });
            // Display the food
            foodElement = document.createElement('div');
            foodElement.style.gridRowStart = food.y;
            foodElement.style.gridColumnStart = food.x;
            foodElement.classList.add('food')
            board.appendChild(foodElement);


        }


        // Main logic starts here
        //musicSound.play();
        let hiscore2 = localStorage.getItem("hiscore2");
        if (hiscore2 === null) {
            hiscoreval2 = 0;
            localStorage.setItem("hiscore2", JSON.stringify(hiscoreval2))
        }
        else {
            hiscoreval2 = JSON.parse(hiscore2);
            hiscoreBox2.innerHTML = `High Score <i class="fa fa-trophy"></i> :` + hiscore2;
        }

        window.requestAnimationFrame(main);
        window.addEventListener('keydown', e => {
            inputDir = { x: 0, y: 1 } // Start the game
            moveSound.play();
            switch (e.key) {
                case "ArrowUp":
                    // console.log("ArrowUp");
                    inputDir.x = 0;
                    inputDir.y = -1;
                    break;

                case "ArrowDown":
                    // console.log("ArrowDown");
                    inputDir.x = 0;
                    inputDir.y = 1;
                    break;

                case "ArrowLeft":
                    // console.log("ArrowLeft");
                    inputDir.x = -1;
                    inputDir.y = 0;
                    break;

                case "ArrowRight":
                   // console.log("ArrowRight");
                    inputDir.x = 1;
                    inputDir.y = 0;
                    break;
                default:
                    break;
            }

        });
        let hiscoreBox1 = document.getElementById("hiscoreBox1");
        hiscoreBox1.style.display = "none";
        let hiscoreBox3 = document.getElementById("hiscoreBox3");
        hiscoreBox3.style.display = "none";

    });

    hard.addEventListener('click', e => {

        // Game Constants & Variables
        let inputDir = { x: 0, y: 0 };
        const foodSound = new Audio('music/food.mp3');
        const gameOverSound = new Audio('music/gameover.mp3');
        const moveSound = new Audio('music/move.mp3');
        const musicSound = new Audio('music/music.mp3');
        let speed = 19;
        let score = 0;
        let lastPaintTime = 0;
        let snakeArr = [
            { x: 13, y: 5 }
        ];
        //let choosemodes = document.getElementById("choosemodes");
        choosemodes.style.display = "none";


        food = { x: 6, y: 7 };
        alert("Press any key to start the game!");
        // Game Functions
        function main(ctime) {
            window.requestAnimationFrame(main);
            // console.log(ctime)
            if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
                return;
            }
            lastPaintTime = ctime;
            gameEngine();
        }

        function isCollide(snake) {
            // If you bump into yourself 
            for (let i = 1; i < snakeArr.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    return true;
                }
            }
            // If you bump into the wall
            if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
                return true;
            }

            return false;
        }

        function gameEngine() {
            // Part 1: Updating the snake array & Food
            if (isCollide(snakeArr)) {
                gameOverSound.play();
                // musicSound.pause();
                inputDir = { x: 0, y: 0 };
                alert("Game Over. Press any key to play again!");
                snakeArr = [{ x: 13, y: 15 }];
                // musicSound.play();
                score = 0;
                scoreBox.innerHTML = "Score: " + score;
            }

            // If you have eaten the food, increment the score and regenerate the food
            if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
                foodSound.play();
                score += 1;
                if (score > hiscoreval3) {
                    hiscoreval3 = score;
                    localStorage.setItem("hiscore3", JSON.stringify(hiscoreval3));
                    hiscoreBox3.innerHTML = `High Score <i class="fa fa-trophy"></i> :` + hiscoreval3;
                }
                scoreBox.innerHTML = "Score: " + score;
                snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
                let a = 2;
                let b = 16;
                food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
            }

            // Moving the snake
            for (let i = snakeArr.length - 2; i >= 0; i--) {
                snakeArr[i + 1] = { ...snakeArr[i] };
            }

            snakeArr[0].x += inputDir.x;
            snakeArr[0].y += inputDir.y;

            // Part 2: Display the snake and Food
            // Display the snake
            board.innerHTML = "";
            snakeArr.forEach((e, index) => {
                snakeElement = document.createElement('div');
                snakeElement.style.gridRowStart = e.y;
                snakeElement.style.gridColumnStart = e.x;

                if (index === 0) {
                    snakeElement.classList.add('head');
                }
                else {
                    snakeElement.classList.add('snake');
                }
                board.appendChild(snakeElement);
            });
            // Display the food
            foodElement = document.createElement('div');
            foodElement.style.gridRowStart = food.y;
            foodElement.style.gridColumnStart = food.x;
            foodElement.classList.add('food')
            board.appendChild(foodElement);


        }


        // Main logic starts here
        //musicSound.play();
        let hiscore3 = localStorage.getItem("hiscore3");
        if (hiscore3 === null) {
            hiscoreval3 = 0;
            localStorage.setItem("hiscore3", JSON.stringify(hiscoreval3))
        }
        else {
            hiscoreval3 = JSON.parse(hiscore3);
            hiscoreBox3.innerHTML = `High Score <i class="fa fa-trophy"></i> :` + hiscore3;
        }

        window.requestAnimationFrame(main);
        window.addEventListener('keydown', e => {
            inputDir = { x: 0, y: 1 } // Start the game
            moveSound.play();
            switch (e.key) {
                case "ArrowUp":
                    // console.log("ArrowUp");
                    inputDir.x = 0;
                    inputDir.y = -1;
                    break;

                case "ArrowDown":
                    // console.log("ArrowDown");
                    inputDir.x = 0;
                    inputDir.y = 1;
                    break;

                case "ArrowLeft":
                    // console.log("ArrowLeft");
                    inputDir.x = -1;
                    inputDir.y = 0;
                    break;

                case "ArrowRight":
                    console.log("ArrowRight");
                    inputDir.x = 1;
                    inputDir.y = 0;
                    break;
                default:
                    break;
            }

        });
        let hiscoreBox1 = document.getElementById("hiscoreBox1");
        hiscoreBox1.style.display = "none";
        let hiscoreBox2 = document.getElementById("hiscoreBox2");
        hiscoreBox2.style.display = "none";

    });

});
