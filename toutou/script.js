var character = document.getElementById('character')
var block = document.getElementById('block')

var score = 0

console.log(character)
function jump() {
	console.log('jump')
	if (character.classList != 'animate'){
		character.classList.add('animate')	
	}

	setTimeout(function(){
		character.classList.remove('animate')
	}, 500)
} 

var isGameOver = false;
var checkDeak = setInterval(function() {
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
	if(blockLeft < 20 && blockLeft > 0 && characterTop >=120){
		block.style.animation = 'none';
		block.style.display = 'none';
		isGameOver = true;

		var gameover = document.getElementById('gameover')
		gameover.innerHTML = 'Game Over - You Die'
	}

	if (!isGameOver) {
	score = score + 10
	document.getElementById('score').innerHTML = "  " + parseInt(score / 100)
	}
}, 10)	

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump()
    }
}

var restart = function() {
	console.log('Restart..')
	setTimeout("location.reload(true);", 10)	
}

window.onload = function(){
	setInterval(startBgm, 100);

}
var startBgm = function(){
	var music = document.getElementById('bgm');
	if(music.paused) {
			music.paused = false;
			music.play()
	}
}
