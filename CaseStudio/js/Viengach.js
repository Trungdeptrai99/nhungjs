var brickConfig={
    offsetX: 25,
    offsetY:100,
    margin: 100,
    width: 225,
    height:30,
    totalRow:5,
    totalCol:5

}
var bricklist=[];
for (let i=0;i<brickConfig.totalRow;i++){
    for(let j=0;j<brickConfig.totalCol;j++){
        bricklist.push({
            x:brickConfig.offsetX+j*(brickConfig.width+brickConfig.margin),
            y: brickConfig.offsetY+i*(brickConfig.height+ brickConfig.margin ),
            isBroken: false
        })
    }
}
function drawBricks(){
    bricklist.forEach(function (b) {
        if(!b.isBroken){ ctx.beginPath();
            ctx.rect(b.x,b.y,brickConfig.width,brickConfig.height )
            ctx.fillStyle= getRandomColor();
            ctx.fill();}
    });

}

function impactBrick() {
    bricklist.forEach(function (b) {
        if(!b.isBroken){
            if(tdx+inputradius>=b.x&&tdx-inputradius<=b.x+brickConfig.width
                &&tdy+inputradius>=b.y&&tdy-inputradius<=b.y+brickConfig.height){
                dy=-dy;
                b.isBroken=true;
                playerScore++;
                if(playerScore== maxScore){
                    isGameOver= true;
                    isGameWin= true;
                }
            }
        }
    })
}



//2* Offset + 5width + 5*magin = 1600;
// offset =magin =100
