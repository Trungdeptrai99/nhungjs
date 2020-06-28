    // Hàm vẽ, clear bóng và thanh chắn
    var Board = {
        height:900,
         width:1600
    }

    var isGameOver = false;
    var isGameWin = false;
    var playerScore = 0;
    var maxScore = brickConfig.totalCol*brickConfig.totalRow
    function impact(){
        if(tdx+inputradius>tdxbar&&tdx+inputradius<tdxbar+widthbar+22.5&&tdy+inputradius>900-inputradius+7.5){
            dy=-dy;
        }
    }

    function draw(){
    if(!isGameOver) {
        ctx.clearRect(0, 0, Board.width, Board.height);
        createBall();
        createBar();
        drawBricks();
        impact();
        impactBrick();
        requestAnimationFrame(draw)

    } else {
        if(isGameWin){
        alert("YOU WIN!!!" +" SCORE "+playerScore+"!!!" )
    }   else
        alert("YOU LOSE!!! "+"Your score is "+playerScore+ "!" );
    }
  }

