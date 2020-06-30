var widthbar= 300;
var heightbar=30;
var tdxbar = 1600/2-widthbar/2;
var tdybar= 900-heightbar;
var speedbar = widthbar/1.61803;
function Bar(x,y,width,height,speed) {
    this.speed= speed;
    this.x=x;
    this.y=y;
    this.width= width;
    this.height= height;
    this.moveLeft = function () {
        this.x= tdxbar- speedbar;
    }
    this.moveRight= function () {
        this.x= tdxbar+speedbar;
    }
    this.isMovingLeft= false;
    this.isMovingRight= false;

}
let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
function keyDown(e) {
    if(e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if( e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUp(e) {
    if( e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if( e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function moveBar  () {
    if(rightPressed && tdxbar < Board.width-widthbar) {
        tdxbar += 15;
    }
    else if(leftPressed && tdxbar > 0) {
        tdxbar -= 15;
    }
}
// Tạo thanh chắn
function createBar() {
    var x =tdxbar ;
    var y = tdybar;
    var width = widthbar;
    var height = heightbar;
    var speed = speedbar;
    var bar = new Bar(x, y, width, height, speed)
    ctx.beginPath()
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(bar.x,bar.y,bar.width ,bar.height);

}