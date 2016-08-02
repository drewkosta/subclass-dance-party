// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.step();
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(function () {
    this.step.apply(this);
  }.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  var styleSettings = {
    top: top,
    left: left || this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function () {
  this.setPosition(500);
};
