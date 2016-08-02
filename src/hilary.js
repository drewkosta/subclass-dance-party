var makeHilaryGif = function(top, left, timeBetweenSteps) {
  this.gifs = ['hilary-scary', 'hillary_bat'];
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeHilaryGif.prototype = Object.create(makeDancer.prototype);
makeHilaryGif.prototype.constructor = makeHilaryGif;

makeHilaryGif.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var random = Math.random();
  var distance = Math.floor(random * 150);
  var addString = '+=' + distance;
  var subtractString = '-=' + distance;
  this.$node.animate({top: subtractString}, function () {
    this.$node.animate({top: addString});
  }.bind(this));
};

makeHilaryGif.prototype.setPosition = function (top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
  this.$node.css('border', '0px');
  var random = Math.random();
  var randomNumber = Math.floor(random * this.gifs.length);
  var selectedHilary = this.gifs[randomNumber];
  var imgTag = '<img class="trump" src="src/assets/' + selectedHilary + '.gif" />';
  this.$node.html(imgTag);
}; 

