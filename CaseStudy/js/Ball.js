var dx= 5;
var dy= 5;
var inputradius= 30;
var tdx=50;
var tdy=50;
var ctx = document.getElementById("myCanvas").getContext("2d");
function Circle(x, y, radius) {
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
     if (tdy < inputradius || tdy > 900- inputradius) {
        dy = -dy;}
    }
    }


function getRandomColor(){
    var red = Math.floor(Math.random()*255);
    var green =Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return  "rgb(" + red + "," + blue + "," + green +")"
}

    function createBall() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var radius = inputradius;
        var color = getRandomColor();
        var x = tdx;
        var y = tdy;
        var circle = new Circle(x, y, radius);
        circle.move();
        circle.changeDirection()
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }