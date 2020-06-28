    // Hàm vẽ, clear bóng và thanh chắn

    var isGameOver = false;
    function impact(){
        if(tdx+inputradius>=tdxbar&&tdx+inputradius<=tdxbar+widthbar&&tdy+inputradius>=900-heightbar){
            dy=-dy;
        }
    }


 
    function draw(){
    if(!isGameOver) {
        ctx.clearRect(0, 0, 1600, 900)
        createBall()
        createBar()
        impact()
        requestAnimationFrame(draw)

    } else {
        alert("GAME OVER");
    }
    }
draw()
