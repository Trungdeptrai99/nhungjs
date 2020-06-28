var widthbar= 300;
var heightbar=30;
var tdxbar = 1600/2-widthbar/2;
var tdybar= 900-heightbar;
var speedbar = 20;
function Bar(x,y,width,height,speed) {
    this.speed= speed;
    this.x=x;
    this.y=y;
    this.width= width;
    this.height= height;
    this.moveLeft = function () {
        tdxbar= tdxbar- speedbar;
    }
    this.moveRight= function () {
        tdxbar= tdxbar+speedbar
    }
}
        document.addEventListener("keydown",function (event) {
            if(event.keyCode==37){
            console.log("Hihi")
            tdxbar= tdxbar- speedbar;
        }
        if(event.keyCode==39){
            tdxbar= tdxbar+ speedbar;
        }
        })
function drawnBar() {
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
