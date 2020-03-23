const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//spaceship
const spaceship = {
    x: canvas.width / 2,
    y: canvas.height / 1.1,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
}

// spaceship bullet
const bullet = {
    x: canvas.width / 2,
    y: canvas.height / 1.5,
    size: 6,
    speed: 4,
    dx: 4,
    dy: -4
};

// spaceship bullet
function drawSpaceShipBullet(){
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.size, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

// drawSpaceShipBullet();
function shootBullet(){
  //  ctx.clearRect(0, 0, canvas.width, canvas.height);
    bullet.x += bullet.dx;
    bullet.y += bullet.dy;
    drawSpaceShipBullet();
}

// Draw ball on canvas
function drawSpaceship() {
    ctx.beginPath();
    ctx.moveTo((canvas.width/2)+60,canvas.height/1.1);
    ctx.lineTo((canvas.width/2),(canvas.height/1.1)-50);
    ctx.lineTo((canvas.width/2)-60,canvas.height/1.1);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

//keydown event
function keyDown(e) {
     //start shoot
   if(e.key === ' ' || e.key === 'Spacebar'){
        console.log('start shooting..');
   
        shootBullet();
    }
    
}


function keyUp(e) {
    //stop shoot
   if(e.key === ' ' || e.key === 'Spacebar'){
       console.log('stop shooting..');
   }
}

function drawEverything(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSpaceship();
}


//keyboard event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);


drawEverything();
