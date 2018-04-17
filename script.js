console.log('script.js loaded!');

var gameCanvas = document.querySelector('#gameCanvas').getContext("2d");

snake = {
  position: [[50,50]],
  direction: 0,

  draw: function() {
    gameCanvas.fillStyle = "#ff0000";
    gameCanvas.fillRect(this.position[0][0], this.position[0][1], 10, 5);
  },

  clear: function() {
    element = this.position.pop();
    gameCanvas.clearRect(element[0], element[1], 10, 5);
  },

  move: function() {
    switch (this.direction){
      case 0:
        this.moveRight();
        break;
      case 1:
        this.moveLeft();
        break;
      case 2:
        this.moveUp();
        break;
      case 3:
        this.moveDown();
    }

    this.draw();
  },

  moveRight: function() {
    newPosition = [this.position[0][0]+10, this.position[0][1]];
    this.position.unshift(newPosition);
    this.clear();
  },

  moveLeft: function() {
    newPosition = [this.position[0][0]-10, this.position[0][1]];
    this.position.unshift(newPosition);
    this.clear();
  },

  moveUp: function() {
    newPosition = [this.position[0][0], this.position[0][1]-5];
    this.position.unshift(newPosition);
    this.clear();
  },

  moveDown: function() {
    newPosition = [this.position[0][0], this.position[0][1]+5];
    this.position.unshift(newPosition);
    this.clear();
  }
};

(function () {
  var callback = function() { 
      snake.move(); 
  };

  callback();

  window.setInterval(callback, 200);
})();

function keyPress(key) {
  switch (key.which){
    case 39:
      snake.direction = 0;
      break;
    case 37:
      snake.direction = 1;
      break;
    case 38:
      snake.direction = 2;
      break;
    case 40:
      snake.direction = 3;
  }
}

window.addEventListener("keydown", keyPress);


