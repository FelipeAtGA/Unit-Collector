document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');

  let stopPrototypeAnimationCollision;
  let requestAnim;
  let stopPrototypeAnimation;
  let keyMove;

  const intViewportHeight = window.innerHeight - 55;
  const $score            = $('#score');
  const $body             = $('body');
  const $backBttn         = $('.back');
  const $winner           = $('#winner');
  const $player           = $('#player');
  const $header           = $('header');
  const intViewportWidth  = window.innerWidth - 125;
  const set               = setInterval(frame, 2000);


  let cancelPlayerMove   = true;
  let move               = 650;
  let moveUp             = 0;
  let updateScore        = 0;
  let arrayOfEnemies     = [];

  class MakeEnemy{
    constructor(ids){
      this.enemy = $('<div>');
      this.enemy.addClass('newEnemy');
      this.enemy.attr('id', ids);
      this.topDown = 0;
      this.fallvar = null;
    }

    randomLeft() {
      let left = Math.floor(Math.random() * 1200) + 1;
      this.enemy.css('left', left + 'px');
    }

    placeEnemy() {
      const $header = $('header');
      $header.append(this.enemy);
    }

    fall() {
      stopPrototypeAnimation = requestAnimationFrame(this.fall.bind(this));
        this.topDown += 5;
        this.fallvar.css('top', this.topDown);
          if(this.topDown > intViewportHeight){
            cancelAnimationFrame(stopPrototypeAnimation);
          }
    }

    collision() {
      const player = document.querySelector('#player').getBoundingClientRect();
      const newEnemy = this.enemy[0].getBoundingClientRect();
      const bottom = document.querySelector('#bottom').getBoundingClientRect();

        if(player.left < newEnemy.left + newEnemy.width &&
          player.left + player.width > newEnemy.left &&
          player.top < newEnemy.top + newEnemy.height &&
          player.height + player.top > newEnemy.top)
          {
            updateScore += 10;
            $score.html(' ' + updateScore);
            this.enemy.css('display', 'none');
            if(updateScore === 50){
              $winner.css('display', 'block');
              $winner.click(function(){
                location.reload();
              })
            }
          }

        if(bottom.left < newEnemy.left + newEnemy.width &&
          bottom.left + bottom.width > newEnemy.left &&
          bottom.top < newEnemy.top + newEnemy.height &&
          bottom.height + bottom.top > newEnemy.top)
          {
            clearInterval(set);
            cancelPlayerMove = false;
            arrayOfEnemies = null; //https://stackoverflow.com/questions/17243463/delete-instance-of-a-class
            $body.css('background-image', 'url("' + 'img/gameOver.png' + '")');
            $backBttn.css('background-color', 'yellow');
            $player.css('background-color', '#ccc');
            $player.css('border-color', '#888');

          }
          stopPrototypeAnimationCollision = requestAnimationFrame(this.collision.bind(this));
    }
  }


  const updatePlayer = function(){
    if(cancelPlayerMove === true){
      if(keyMove === 39){
  	  	move += 8;
  	  	$player.css('left', move);
  	  	if(move >= intViewportWidth){
  	  		move = 1320;
  	  	}
    	}else if(keyMove === 37){
  	  	move -= 8;
  	  	$player.css('left', move);
  	  	if(move <= 8){
  	  		move = 8;
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
    }else{ return false }
      requestAnim = requestAnimationFrame(updatePlayer);
  };


  for(let i = 0; i < 5; i++){
    let ids = 'b' + i;
    arrayOfEnemies.push(new MakeEnemy(ids));
  }

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

  document.addEventListener('keydown', function(event){
  	keyMove = event.keyCode;
  });

  //the request animation function is from:
  //https://css-tricks.com/using-requestanimationframe/

  requestAnim = requestAnimationFrame(updatePlayer);

});
