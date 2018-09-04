// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 1;
    if (this.x > 500) {
        this.x = 30; // controls enemies speed
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400; 
};  //players starting position   

Player.prototype.update = function(dt) {
    //check collision
    for (let enemy of allEnemies) {
        if (Math.abs(this.y - enemy.y) < 30 && Math.abs(this.x - enemy.x) < 30) {
          this.x = 200;
          this.y = 400; 
            alert('Ouch!');
        }
        //If player wins
        if (this.y < 10) {
            alert('You Win!');
            this.y = 410;
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player control settings
player.prototype.handleInput = function(dt) {
    switch (dt) {
        case "up":
            //prevents player from scrolling offscreen upwards
        if (this.y > 0) {
            this.y -= 50;
        }
        break;
        case "down":
            //prevents player from scrolling offscreen downwards
        if (this.y < 50 * 8) {
            this.y += 50;
        }
        break;
        case "left":
            //prevents player from scrolling offscreen to the left
         if (this.x < 0) {
            this.x -= 50;  
         }
        break;
        case "right":
            //prevents player from scrolling offscreen to the right
         if (this.x < 50 * 8) {
            this.x += 50; 
         }
         break;
    }
};
         

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [ new Enemy(-200, 65), new Enemy(-150, 145), new Enemy(-100, 230),
                  new Enemy(10, 65), new Enemy(25, 145), new Enemy(40, 230)];
//Draws player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
