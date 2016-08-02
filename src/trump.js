var makeTrumpGif = function(top, left, timeBetweenSteps) {
  this.trumps = ['trump-mouth', 'trump-shit', 'trump-shades', 'trump-mario'];
  this.attacks = ['trump-mouth', 'trump-shit', 'trump-shades', 'trump-mario'];
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
  this.$node.on('click', this.attack);
}; 

makeTrumpGif.prototype.attack = function () {
  var trumpGif = {
    left: $(this)[0].offsetLeft,
    top: $(this)[0].offsetTop
  };

  var $hillaries = $('.hillary');
  console.log($hillaries);
  var shortestDistance, $closestHillary;
  $hillaries.each(function(index) {
    var hilOffset = $(this).offset();
    // console.log(shortestDistance);
    var left = hilOffset.left;
    var top = hilOffset.top;
    var distance = Math.sqrt(Math.pow((left - trumpGif.left), 2) + Math.pow((top - trumpGif.top), 2));
    if (shortestDistance === undefined || distance < shortestDistance) {
      shortestDistance = distance;
      closestHillary = {left: left, top: top};
    }
  });
  $(this).animate(closestHillary, function () {
    $(this).animate(trumpGif);
  });
  console.log(shortestDistance, $closestHillary);
  

};