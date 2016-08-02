var makeTrumpGif = function(top, left, timeBetweenSteps) {
  this.trumps = ['trump-mouth', 'trump-crop', 'trump-shit', 'trump-shades', 'trump-mario'];
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
  var attacks = ['pow.png', 'bam.png'];
  var $hillaries = $('.hillary');
  var longestDistance, furthestHillary;
  $hillaries.each(function(index) {
    var hilOffset = $(this).offset();
    var left = hilOffset.left;
    var top = hilOffset.top;
    var distance = Math.sqrt(Math.pow((left - trumpGif.left), 2) + Math.pow((top - trumpGif.top), 2));
    if (longestDistance === undefined || distance > longestDistance) {
      longestDistance = distance;
      furthestHillary = {left: left, top: top};
    }
  });
  $(this).animate(furthestHillary, function () {
    var stored = $(this).html();
    $(this).css('height', '0px');
    var random = Math.random();
    var randomSelected = attacks[Math.floor(random * attacks.length)];
    var htmlString = '<div><img class="trumpattack" src="src/assets/' + randomSelected + '"><audio autoplay src="src/assets/smack.mp3></audio></div>';  
    $(this).html(htmlString);

    $(this).animate({height: "300px"}, 'slow', function () {
      $(this).html(stored); 
      $(this).animate(trumpGif);
    });
  });  
};