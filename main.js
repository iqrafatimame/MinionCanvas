const canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const image = document.getElementById('source');
var player = {
    x: 20,
    y: 200,
    speed: 3,
    h: 150,
    w : 150,
    dx: 4,
    dy: 5
}
// draw player
function drawPlayer(){
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

// clear
function clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
function detectWalls(){
    //left wall
    if(player.x < 0){
        player.x = 0;
    }
    // right wall
    if(player.x + player.w > canvas.width){
      player.x =  canvas.width - player.w
    }
    // upper wall
    if(player.y < 0){
        player.y =0;
    }
    // bottom wall
    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h;
    }
}

// new position
function newposition(){
    player.x += player.dx;
    player.y += player.dy;
    detectWalls();
}
// moveRight
function moveRight(){
    player.dx = player.speed;
}
function moveLeft(){
    player.dx = -player.speed;
}
function moveDown(){
    player.dy = player.speed;
}
function moveUp(){
    player.dy =  -player.speed;
}

// key down event
function keyDown(e){
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }else if(e.key === 'ArrowUp' || e.key ==='Up'){
        moveUp();
    }else if(e.key === 'ArrowDown' || e.key ==='Down'){
        moveDown();
    }
}
function keyUp(e){
    if( e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'){
        player.dx = 0;
        player.dy = 0;
    }
}

// update player
function update(){
    clear();
    drawPlayer();
    newposition();
    requestAnimationFrame(update);
}

update();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);