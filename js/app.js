document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');

  // const bttn = $('button');
  // var playerBanner;

  // bttn.click(function(){
  //   event.preventDefault();
  //     playerBanner = $('#playerName').val();
  //     console.log(playerBanner);
  // });

  // const scoreDiv = $('<span>');
  // scoreDiv.addClass('score');
  // scoreDiv.html(playerBanner);
  // const $scoreBoard = $('.scoreBoard');
  // $scoreBoard.append(scoreDiv);

  var stopPrototypeAnimationCollision;
  var intViewportHeight = window.innerHeight - 100;
  var $score = $('#score');

  const $player = $('#player');
  var $header = $('header');
  var move = 650;
  var moveUp = 0;
  var keyMove;
  var requestAnim;
  var intViewportWidth = window.innerWidth - 105;
  var stopPrototypeAnimation;
  var updateScore = 0;
  var arrayOfEnemies = [];

  class MakeEnemy{
    constructor(ids){
      this.enemy = $('<div>');
      this.enemy.addClass('newEnemy');
      this.enemy.attr('id', ids);
      this.topDown = 0;
      this.fallvar = null;
    }

    randomLeft(){
      let left = Math.floor(Math.random() * 1200) + 1;
      this.enemy.css('left', left + 'px');
    }

    placeEnemy(){
      var $header = $('header');
      $header.append(this.enemy);
    }

    fall() {
      stopPrototypeAnimation = requestAnimationFrame(this.fall.bind(this));
        this.topDown += 1;
        this.fallvar.css('top', this.topDown);
          if(this.topDown > intViewportHeight){
            cancelAnimationFrame(stopPrototypeAnimation);
              }
    }

    collision(){
      var player = document.querySelector('#player').getBoundingClientRect();
      var newEnemy = this.enemy[0].getBoundingClientRect();

        if(player.left < newEnemy.left + newEnemy.width &&
          player.left + player.width > newEnemy.left &&
          player.top < newEnemy.top + newEnemy.height &&
          player.height + player.top > newEnemy.top)
          {
            updateScore += 10;
            $score.html(' ' + updateScore);
            this.enemy.css('display', 'none');
          }
          stopPrototypeAnimationCollision = requestAnimationFrame(this.collision.bind(this));
    }  
  }


  const updatePlayer = function(){

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
	  	// }else if(keyMove === 38){
    //     moveUp -= 5;
    //     $player.css('top', moveUp);
    //     if(moveUp < -575){
    //       moveUp = -575;
    //     }
    //   }else if(keyMove === 40){
    //     moveUp += 5;
    //     $player.css('top', moveUp);
    //     if(moveUp > 70){
    //       moveUp = 70;
    //     }

      }
      requestAnim = requestAnimationFrame(updatePlayer);
  };


  for(let i = 0; i < 5; i++){
    let ids = 'b' + i;
    arrayOfEnemies.push(new MakeEnemy(ids));
  }

  function deployEnemies(){
    const set = setInterval(frame, 1000);
    let i = 0;
    function frame(){
      if(i > 4){
        clearInterval(set);
      } else {
        arrayOfEnemies[i].randomLeft();
        arrayOfEnemies[i].placeEnemy();
        arrayOfEnemies[i].fallvar = $('#b' + i);
        arrayOfEnemies[i].fall();
        arrayOfEnemies[i].collision();
        i += 1;
      }
    }
  }

  deployEnemies();

  document.addEventListener('keydown', function(event){
  	keyMove = event.keyCode;
  });

  //the request animation function is from:
  //https://css-tricks.com/using-requestanimationframe/

  requestAnim = requestAnimationFrame(updatePlayer);

});