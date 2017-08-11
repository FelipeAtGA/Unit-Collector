document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');

  const $player = $('#player');
  // const $enemy = $('#enemy');
  const $score = $('#score');
  var $header = $('header');
  var topY = 0;
  var move = 650;
  var keyMove;
  var requestAnim;
  var intViewportWidth = window.innerWidth - 100;
  var intViewportHeight = window.innerHeight - 135;
  var stopPlayerAnimation;
  var stopPrototypeAnimation;
  var updateScore = 0;

  const updatePlayer = function(){
   requestAnim = requestAnimationFrame(updatePlayer);

  	//getBoundingClientRect from MDN
  	//this method cannot be applied to jQuery statements
  	// var player = document.querySelector('#player').getBoundingClientRect();
  	// var enemy = document.querySelector('#enemy').getBoundingClientRect();

    if(keyMove === 39){
	  	move += 10;
	  	$player.css('left', move);
	  	if(move === intViewportWidth){
	  		move = 1330;
	  	}
  	}else if(keyMove === 37){
	  	move -= 10;
	  	$player.css('left', move);
	  	if(move === 0){
	  		move += 10;
	  	}

  	}
  // 	if(player.left < enemy.left + enemy.width &&
		// player.left + player.width > enemy.left &&
		// player.top < enemy.top + enemy.height &&
		// player.height + player.top > enemy.top){
  // 		updateScore += 10;
  // 		$score.html(' ' + updateScore);
  // 		$enemy.css('display', 'none');
  // 		// cancelAnimationFrame(requestAnim);
  // 	    // cancelAnimationFrame(stopEnemyAnimation);
		// // console.log('Collision...!');
  //   }
  	// requestAnim = requestAnimationFrame(updatePlayer);
  };

  const updateEnemy = function(){
  	stopEnemyAnimation = requestAnimationFrame(updateEnemy);
  	topY += 1;
  	$enemy.css('top', topY);
	  	if(topY > intViewportHeight){
	  		cancelAnimationFrame(stopEnemyAnimation);
   	  	}   	
  };


  document.addEventListener('keydown', function(event){
  	keyMove = event.keyCode;
  	//requestAnimationFrame(updatePlayer);
  });

  //the request animation function is from:
  //https://css-tricks.com/using-requestanimationframe/

  requestAnim = requestAnimationFrame(updatePlayer);
  // stopEnemyAnimation = requestAnimationFrame(updateEnemy);
  // setTimeout(function(){ makeEnemy(); }, 1000);

});