
// var stopEnemyAnimation;
// var stopPrototypeAnimationCollision;
// var intViewportHeight = window.innerHeight - 185;
// var updateScore2 = 0;
// var $score = $('#score');
// // var $newEnemy;

// class MakeEnemy{
// 	constructor(){
// 		this.enemy = $('<div>');
// 		this.enemy.addClass('newEnemy');
// 		// this.topDown = 0;
// 	}

// 	randomLeft(){
// 		// this.enemy.css('top', '-140px');
// 		let left = Math.floor(Math.random() * 1200) + 1;
// 		this.enemy.css('left', left + 'px');
// 		let top = Math.floor(Math.random() * 500) + 1;
// 		this.enemy.css('top', top + 'px');
// 	}

// 	placeEnemy(){
// 		var $header = $('header');
// 		$header.append(this.enemy);
// 	}

// 	// fall() {
// 	// 	while(this.topDown < intViewportHeight){
// 	// 		this.topDown += 1;
// 	// 		console.log(this.topDown);
// 	// 		$newEnemy.css('top', this.topDown);
// 	// 		var brk = setInterval(this.fall, 1000);
// 	// 	}
// 	//   	stopPrototypeAnimation = requestAnimationFrame(this.fall);
// 	//   	topDown += 1;
// 	//   	$newEnemy.css('top', topDown);
// 	// 	  	if(topDown > intViewportHeight){
// 	// 	  		cancelAnimationFrame(stopPrototypeAnimation);
// 	//    	  	}
//  //    }

//  //    collision(){
// 	//    	var player = document.querySelector('#player').getBoundingClientRect();
// 	//   	var newEnemy = document.querySelector('.newEnemy').getBoundingClientRect();

//  //    	if(player.left < newEnemy.left + newEnemy.width &&
// 	// 		player.left + player.width > newEnemy.left &&
// 	// 		player.top < newEnemy.top + newEnemy.height &&
// 	// 		player.height + player.top > newEnemy.top){
// 	//   		updateScore2 += 10;
// 	//   		$score.html(' ' + updateScore2);
// 	//   		$newEnemy.css('display', 'none');
// 	//   		// cancelAnimationFrame(requestAnim);
// 	//   	    // cancelAnimationFrame(stopEnemyAnimation);
// 	// 		console.log('Collision...!');
// 	//     }
// 	//     stopPrototypeAnimationCollision = requestAnimationFrame(this.collision);
//  //    }
// };

// // MakeEnemy.prototype.fall = function() {
// //   	stopPrototypeAnimation = requestAnimationFrame(this.fall.bind(this));
// //   	this.topDown += 1;
// //   	let x = this.topDown + 'px';
// //   	$newEnemy.css('top', x);
// // 	  	if(this.topDown > intViewportHeight){
// // 	  		cancelAnimationFrame(stopPrototypeAnimation);
// //    	  	}
// // }

// // MakeEnemy.prototype.collision = function(){
// //    	var player = document.querySelector('#player').getBoundingClientRect();
// //   	var newEnemy = document.querySelector('.newEnemy').getBoundingClientRect();

// // 	if(player.left < newEnemy.left + newEnemy.width &&
// // 		player.left + player.width > newEnemy.left &&
// // 		player.top < newEnemy.top + newEnemy.height &&
// // 		player.height + player.top > newEnemy.top){
// //   		updateScore2 += 10;
// //   		$score.html(' ' + updateScore2);
// //   		$newEnemy.css('display', 'none');
// //   		deployEnemies();
// //   		// cancelAnimationFrame(requestAnim);
// //   	    // cancelAnimationFrame(stopEnemyAnimation);
// // 		console.log('Collision...!');
// //     }
// //     stopPrototypeAnimationCollision = requestAnimationFrame(this.collision.bind(this));
// // }

// // var arrayOfEnemies = [];

// // for(let i = 0; i < 5; i++){
// // 	arrayOfEnemies.push(new MakeEnemy());
// // }

// // for(let i = 0; i < arrayOfEnemies.length; i += 1){
// // 	arrayOfEnemies[i].randomLeft();
// // 	arrayOfEnemies[i].placeEnemy();
// // 	var $newEnemy = $('.newEnemy');
// // 	arrayOfEnemies[i].fall();
// // 	// arrayOfEnemies[i].collision();
// // 	// stopPrototypeAnimation = requestAnimationFrame(arrayOfEnemies[i].fall());
// // 	// stopPrototypeAnimationCollision = requestAnimationFrame(arrayOfEnemies[i].collision());
// // }
// // objEnemy.randomLeft();
// // objEnemy.placeEnemy();

// // objEnemy.collision();

// // function deployEnemies() {
// //   var id = setInterval(frame, 1000);
// //   var ii = 0;
// //   function frame() {
// //     if (ii > 5) {
// //       clearInterval(id);
// //     } else {
// //     arrayOfEnemies[ii].randomLeft();
// //     arrayOfEnemies[ii].placeEnemy();
// //     $newEnemy = $('.newEnemy');
// //     arrayOfEnemies[ii].collision();
// //     ii += 1;
// //     }
// //   }
// //  }
// // let ii = 0;
// //  function deployEnemies() {
// //     arrayOfEnemies[ii].randomLeft();
// //     arrayOfEnemies[ii].placeEnemy();
// //     // $newEnemy = $('.newEnemy');
// //     arrayOfEnemies[ii].collision();
// //     ii++;
// //     }

// // deployEnemies();

