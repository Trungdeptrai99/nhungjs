var widthbar= 300;
var heightbar=30;
var tdxbar = 1600/2-widthbar/2;
var tdybar= 900-heightbar;
var speedbar = widthbar/1.5;
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
        this.x= tdxbar+speedbar
    }
    this.isMovingLeft= false;
    this.isMovingRight= false;

}     // Bắt sự kiện cho thanh chắn
        document.addEventListener("keydown",function (event) {
            if(event.keyCode==37){
                tdxbar= tdxbar-speedbar;
            }
            if(event.keyCode==39){
                tdxbar= tdxbar+ speedbar;
            }

            if(tdxbar>=1600-widthbar){

                tdxbar =1300 ;
            }
            if(tdxbar<=0){
                tdxbar=0;
            }
    })
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
