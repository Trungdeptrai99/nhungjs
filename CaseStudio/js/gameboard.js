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
        if(tdx+inputradius*Math.sqrt(2)/2>tdxbar&& tdx-inputradius*Math.sqrt(2)/2<tdxbar+widthbar
            &&tdy>=Board.height-heightbar- inputradius*Math.sqrt(2)/2){
            dy=-dy;
        }
    }

    function drawPlayScoreAndLive() {
        ctx.beginPath();
        ctx.font='35px verdana'
        ctx.fillStyle = "#00ffe1";
        ctx.fillText("Score: "+playerScore +" Lives: "+ maxLive,Board.width-350,60,1000);
    }
    function draw(){
    if(!isGameOver) {
        ctx.clearRect(0, 0, Board.width, Board.height);
        createBall();
        createBar();
        drawBricks();
        drawPlayScoreAndLive();
        moveBar();
        impact();
        impactBrick();
        requestAnimationFrame(draw)

    } else {
        if(isGameWin){
        alert("YOU WIN!!!" +" SCORE "+playerScore+"!!!" );
            document.location.reload();
    }   else {

             alert("YOU LOSE!!! " + "Your score is " + playerScore + "!");
             document.location.reload();
        }
    }
  }
function iterView() {
    drawBricks();
    createBall();
    createBar();
}
iterView()