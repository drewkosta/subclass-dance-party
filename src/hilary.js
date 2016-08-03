var makeHilaryGif = function(top, left, timeBetweenSteps) {
  this.gifs = ['hilary-scary', 'hillary_bat', 'hillary-podium', 'hillary-yellow'];
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeHilaryGif.prototype = Object.create(makeDancer.prototype);
makeHilaryGif.prototype.constructor = makeHilaryGif;

makeHilaryGif.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var random = Math.random();
  var distance = Math.floor(random * 150);
  var origin = {
    left: this.left,
    top: this.top,
  };
  var addString = '+=' + distance;
  var subtractString = '-=' + distance;
  this.$node.animate({top: subtractString}, function () {
    this.$node.animate(origin);
  }.bind(this));
};

makeHilaryGif.prototype.setPosition = function (top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
  this.$node.css('border', '0px');
  var random = Math.random();
  var randomNumber = Math.floor(random * this.gifs.length);
  var selectedHilary = this.gifs[randomNumber];
  var imgTag = '<img class="hillary" src="src/assets/' + selectedHilary + '.gif" />';
  this.$node.html(imgTag);
  this.$node.on('click', this.attack);
};

makeHilaryGif.prototype.attack = function () {
  var trumpGif = {
    left: $(this)[0].offsetLeft,
    top: $(this)[0].offsetTop
  };
  var attacks = ['pow.png', 'bam.png'];
  var $hillaries = $('.trump');
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
    var htmlString = '<img class="hilattack" src="src/assets/' + randomSelected + '">';  
    $(this).html(htmlString);
    $('#smack')[0].play();
    $(this).animate({height: "300px"}, 'slow', function () {
      $(this).html(stored); 
      $(this).animate(trumpGif);
    });
  });  
};