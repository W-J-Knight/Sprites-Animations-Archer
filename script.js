window.addEventListener('load', function(){
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);


class Player {
  constructor(width, height, movesObject, defaultMove) {
    this.width = width;
    this.height = height;
    this.movesObject = movesObject
    this.image = new Image()
    this.frameX = 0;
    this.frameY = 0;
    this.defaultMove = defaultMove
  }
  update() {
    this.move = this.movesObject[this.defaultMove]
    this.src = this.move.src;
    this.maxFrames = this.move.maxFrames;
    this.movesStaggerFrames = this.move.movesStaggerFrames
    
  }
  draw(position) {
    this.image.src = this.src
    // context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
    ctx.drawImage(this.image, this.width * position, this.height * this.frameY, this.width, this.height, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  }
}

let gameFrame = 0;


const movesOjectPlayer_1 = {
  "idle": { src: "./assets/archer/Idle.png", maxFrames: 6, movesStaggerFrames: 8 },
  "waiting": { src: "./assets/archer/Idle_2.png", maxFrames: 4, movesStaggerFrames: 8 },
  "walk": { src: "./assets/archer/Walk.png", maxFrames: 8, movesStaggerFrames: 12 },
  "run": { src: "./assets/archer/Run.png", maxFrames: 8, movesStaggerFrames: 4 },
  "jump": { src: "./assets/archer/Jump.png", maxFrames: 9, movesStaggerFrames: 5 },
  "hurt": { src: "./assets/archer/Hurt.png", maxFrames: 3, movesStaggerFrames: 5 },
  "attack": { src: "./assets/archer/Attack_1.png", maxFrames: 4, movesStaggerFrames: 5 },
  "verticalShot": { src: "./assets/archer/Shot_1.png", maxFrames: 14, movesStaggerFrames: 15 },
  "horizonalShot": { src: "./assets/archer/Shot_2.png", maxFrames: 13, movesStaggerFrames: 15 },
  "dying": { src: "./assets/archer/Dead.png", maxFrames: 3, movesStaggerFrames: 18 },
  
}
const player_1 = new Player(128, 128, movesOjectPlayer_1, "run")

player_1.defaultMove = "waiting"
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e){
  player_1.defaultMove  = e.target.value;
})



function animate() {
  player_1.update()
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / player_1.movesStaggerFrames) % player_1.maxFrames;
  // context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
  player_1.draw(position)
  gameFrame++
  requestAnimationFrame(animate)
}


animate()
})