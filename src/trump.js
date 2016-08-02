var makeTrumpGif = function(top, left, timeBetweenSteps) {
  this.trumps = ['trump-mouth', 'trump-shit', 'trump-shades', 'trump-mario'];
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeTrumpGif.prototype = Object.create(makeDancer.prototype);
makeTrumpGif.prototype.constructor = makeTrumpGif;

makeTrumpGif.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var random = Math.random();
  var distance = Math.floor(random * 500);
  var addString = '+=' + distance;
  var subtractString = '-=' + distance;
  this.$node.animate({left: addString}, function () {
    this.$node.animate({left: subtractString});
  }.bind(this));
};

makeTrumpGif.prototype.setPosition = function (top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
  this.$node.css('border', '0px');
  var random = Math.random();
  var randomNumber = Math.floor(random * this.trumps.length);
  var selectedTrump = this.trumps[randomNumber];
  var imgTag = '<img class="trump" src="src/assets/' + selectedTrump + '.gif" />';
  this.$node.html(imgTag);
}; 
