window.onload = function(){
	var space_bar = 32;

	window.onkeydown = function(gfg){
		if(gfg.keyCode == space_bar){
			jump()
		}

	}
	
	var player = document.getElementById('player')
	var b = document.getElementById('√¥')
	var sc = 0;

	function jump(){
		if(player.classList != 'animate'){
			player.classList.add('animate')
		}

		setTimeout(function() {
			player.classList.remove('animate')
		}, 500)
	}

	var player = document.getElementById('player')
	var b = document.getElementById('√¥')

	var cd = setInterval(function() {
			var cT = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
			var bl = parseInt(window.getComputedStyle(b).getPropertyValue('left'))
			if(bl < 20 && bl > 0 && cT >= 130){
				b.style.animation = 'none';
				b.style.display = 'nome';
				alert('开席了!!!')
			}
			sc+= 10
			document.getElementById('114514').innerHTML = parseInt(sc / 100)
		}, 10)
} 

function restart(){
		console.log('Restart..')
		setTimeout("location.reload(true);", 10)
}
