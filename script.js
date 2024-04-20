const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);


// let playerImage = document.getElementById('player');
const playerImage = new Image();

// move: attack
// 512 / 4 = 128
// playerImage.src = "./assets/Attack_1.png";

// move: idle
// 512 / 4 = 128
// playerImage.src = "./assets/Idle_2.png";

// move: hurt
// 384 / 3 = 128
// playerImage.src = "./assets/Hurt.png";

// move: dying
// 384 / 3 = 128
// playerImage.src = "./assets/Dead.png";

// move: other idle
// 768 / 6 = 128
// playerImage.src = "./assets/Idle.png";

// move: other jump
// 1152 / 9 = 128
playerImage.src = "./assets/Jump.png";

const playerWidth = 128;
const playerHeight = 128;
let frameX = 0;
let frameY = 0;
let gameFrame = 0; 
const staggerFrames = 5; 

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame/staggerFrames) % 9;
  // context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
  ctx.drawImage(playerImage,playerWidth * position , playerHeight * frameY, playerWidth , playerHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  gameFrame++
  console.log(position)
  requestAnimationFrame(animate)
}
animate()