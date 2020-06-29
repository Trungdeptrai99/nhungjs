var dx= Math.random()*(7-5)+5;
var dy= Math.random()*(7-5)+5;
var inputradius= 30;
var tdx=800;
var tdy=835;
var ctx = document.getElementById("myCanvas").getContext("2d");
var maxLive = 3;

function Ball(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.move = function () {
         tdx = tdx + dx;

        tdy = tdy + dy;
    }
    this.changeDirection = function () {

           if (tdx < inputradius || tdx > 1600-inputradius) {
        dx = -dx;
    }
     if (tdy < inputradius ) {
        dy = -dy;}
     if(tdy > Board.height- inputradius){
         maxLive--;
         if(maxLive>0){
             tdx=800;
             tdy=835;
             tdxbar = Board.width/2-widthbar/2;
             tdybar= Board.height-heightbar;
         }
         else isGameOver= true;
     }
    }
    }
    //lấy màu đổ cho canvas
    function getRandomColor(){
        var red = Math.floor(Math.random()*255);
        var green =Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        return  "rgb(" + red + "," + blue + "," + green +")"
    }
        //Tạo bóng
    function createBall() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var radius = inputradius;
        var color = getRandomColor();
        var x = tdx;
        var y = tdy;
        var ball = new Ball(x, y, radius);
        ball.move();
         ball.changeDirection()
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
