 var player = document.getElementById('player')
var block = document.getElementById('block')

 var jump = function () {
 	console.log('jump..')
 	if(player.classList !='animate'){
 		player.classList.add('animate')
 	}
 
 	setTimeout(function(){
 		player.classList.remove('animate')
 	}, 500) 
 }

var points = 0;

var gameOver = false;

var checkDead = function(){
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if (blockLeft < 20 && blockLeft > 0 && playerTop >= -280){
        block.style.animation = 'none';
        block.style.display = 'none';
        gameOver = true;

        var gameTitle = document.getElementById('gameoverTitle')
        gameTitle.style.visibility = "visible";

    }
}

var updatePoints =function () {
    if(!gameOver){
        points = points + 1;
        var scoreBar = document.getElementById('score')
        scoreBar.innerHTML = points
    }
}

setInterval(updatePoints, 2000)
setInterval(checkDead, 20)

window.onload = function(){
    console.log('onload...');
    setInterval(startBgm, 100);
}

var startBgm = function() {
    var music = document.getElementById('bgm');
    if(music.paused) {
        music.paused = false;
        music.play()
    }
}
