var topDown = 0;
var stopEnemyAnimation;
var stopPrototypeAnimationCollision;
var intViewportHeight = window.innerHeight - 185;
var updateScore2 = 0;
var $score = $('#score');

class MakeEnemy{
	constructor(){
		this.enemy = $('<div>');
		this.enemy.addClass('newEnemy');
	}

	randomLeft(){
		let left = Math.floor(Math.random() * 1380) + 1;
		this.enemy.css('left', left);
	}

	placeEnemy(){
		var $header = $('header');
		$header.append(this.enemy);
	}

	fall() {
	  	stopPrototypeAnimation = requestAnimationFrame(objEnemy.fall);
	  	topDown += 1;
	  	$newEnemy.css('top', topDown);
		  	if(topDown > intViewportHeight){
		  		cancelAnimationFrame(stopPrototypeAnimation);
	   	  	}
    }

    collision(){
	   	var player = document.querySelector('#player').getBoundingClientRect();
	  	var newEnemy = document.querySelector('.newEnemy').getBoundingClientRect();

    	if(player.left < newEnemy.left + newEnemy.width &&
			player.left + player.width > newEnemy.left &&
			player.top < newEnemy.top + newEnemy.height &&
			player.height + player.top > newEnemy.top){
	  		updateScore2 += 10;
	  		$score.html(' ' + updateScore2);
	  		$newEnemy.css('display', 'none');
	  		// cancelAnimationFrame(requestAnim);
	  	    // cancelAnimationFrame(stopEnemyAnimation);
			console.log('Collision...!');
	    }
	    stopPrototypeAnimationCollision = requestAnimationFrame(objEnemy.collision);
    }
};

const objEnemy = new MakeEnemy();
objEnemy.randomLeft();
// setTimeout( function(){ objEnemy.placeEnemy(); }, 1000);
objEnemy.placeEnemy();
var $newEnemy = $('.newEnemy');
objEnemy.collision();

stopPrototypeAnimation = requestAnimationFrame(objEnemy.fall);
stopPrototypeAnimationCollision = requestAnimationFrame(objEnemy.collision);




