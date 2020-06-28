function draw() {
    ctx.clearRect(0,0,1600,900)
    createBall()
    drawnBar()
    requestAnimationFrame(draw)

}
draw()