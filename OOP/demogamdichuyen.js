
this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
}

if((hero.left= window.innerWidth-hero.size)&&(hero.top=window.innerHeight-hero.size)){
    hero.moveDown();
}