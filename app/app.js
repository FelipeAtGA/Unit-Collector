document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');

  const bttn = $('button');
  var playerBanner;

  bttn.click(function(){
    event.preventDefault();
      playerBanner = $('#playerName').val();
      console.log(playerBanner);
  });

  const scoreDiv = $('<span>');
  scoreDiv.addClass('score');
  scoreDiv.html(playerBanner);
  const $scoreBoard = $('.scoreBoard');
  $scoreBoard.append(scoreDiv);

var stopEnemyAnimation;
var stopPrototypeAnimationCollision;
var intViewportHeight = window.innerHeight - 185;
var updateScore2 = 0;
var $score = $('#score');

  const $player = $('#player');
  var $newEnemy;
  // const $score = $('#score');
  var $header = $('header');
  var topY = 0;
  var move = 650;
  var moveUp = 0;
  var keyMove;
  var requestAnim;
  var intViewportWidth = window.innerWidth - 105;
  var intViewportHeight = window.innerHeight - 140;
  var stopPlayerAnimation;
  var stopPrototypeAnimation;
  var updateScore = 0;

class MakeEnemy{
  constructor(){
    this.enemy = $('<div>');
    this.enemy.addClass('newEnemy');
    // this.enemy.css('display', 'inline-block');
    // this.topDown = 0;
  }

  randomLeft(){
    // this.enemy.css('top', '-140px');
    let left = Math.floor(Math.random() * 1200) + 1;
    this.enemy.css('left', left + 'px');
    let top = Math.floor(Math.random() * 500) + 1;
    this.enemy.css('top', top + 'px');
  }

  placeEnemy(){
    var $header = $('header');
    $header.append(this.enemy);
  }
}

var arrayOfEnemies = [];

for(let i = 0; i < 5; i++){
 arrayOfEnemies.push(new MakeEnemy());
}

  const updatePlayer = function(){
   // requestAnim = requestAnimationFrame(updatePlayer);

  	//getBoundingClientRect from MDN
  	//this method cannot be applied to jQuery statements
  	var player = document.querySelector('#player').getBoundingClientRect();
  	var enemy = document.querySelector('.newEnemy').getBoundingClientRect();

    if(keyMove === 39){
	  	move += 5;
	  	$player.css('left', move);
	  	if(move >= intViewportWidth){
	  		move = 1340;
	  	}
  	}else if(keyMove === 37){
	  	move -= 5;
	  	$player.css('left', move);
	  	if(move === 0){
	  		move += 5;
      }
	  	}else if(keyMove === 38){
        moveUp -= 5;
        $player.css('top', moveUp);
        if(moveUp < -575){
          moveUp = -575;
        }
      }else if(keyMove === 40){
        moveUp += 5;
        $player.css('top', moveUp);
        if(moveUp > 70){
          moveUp = 70;
        }

      }

  	// var enemy = document.querySelector('.newEnemy').getBoundingClientRect();
  	if(player.left < enemy.left + enemy.width &&
		player.left + player.width > enemy.left &&
		player.top < enemy.top + enemy.height &&
		player.height + player.top > enemy.top){
  		updateScore += 10;
  		$score.html(' ' + updateScore);
  		$newEnemy.css('display', 'none');
      deployEnemies();
  		// cancelAnimationFrame(requestAnim);
  	    // cancelAnimationFrame(stopEnemyAnimation);
		// console.log('Collision...!');
    }
  	requestAnim = requestAnimationFrame(updatePlayer);
  };

  // const updateEnemy = function(){
  // 	stopEnemyAnimation = requestAnimationFrame(updateEnemy);
  // 	topY += 1;
  // 	$enemy.css('top', topY);
	 //  	if(topY > intViewportHeight){
	 //  		cancelAnimationFrame(stopEnemyAnimation);
  //  	  	}   	
  // };

let ii = 0;
 function deployEnemies() {
    arrayOfEnemies[ii].randomLeft();
    arrayOfEnemies[ii].placeEnemy();
    $newEnemy = $('.newEnemy');
    // arrayOfEnemies[ii].collision();
    ii++;
    }

deployEnemies();


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