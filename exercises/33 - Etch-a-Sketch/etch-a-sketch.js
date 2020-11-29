//select elements on da page: canvas, shake button,
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 40; //TRUE CONSTANT COS OF CAPS AND UNDERSCORE!

//set up our canvas for drawing
// const width = canvas.width;
// const height = canvas.height;

const { width, height } = canvas; // destructuring, euqal to the 2 commented lines above
//create random x and y starting points on da canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
let hue = 0;
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
ctx.beginPath(); //start the drawing
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function
function draw({ key }) {
  console.log(key);
  //start the path
  //increment the hue
  hue += 30;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  //move our x and y values depending on wat the usre did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

//write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
//clear or shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      console.log('done da shake');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

//listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
